async function createPasswordResetToken(email) {
    const resetToken = crypto.randomBytes(32).toString('hex');
    
    const hashedToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');
  
    const user = await prisma.user.update({
      where: { email:email },
      data: {
        passwordResetToken: hashedToken,
        passwordResetExpires: new Date(Date.now() + 10 * 60 * 1000), // Set expiration time
      },
    });
  
    
  
    return resetToken;
  }
