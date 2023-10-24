/*
  Warnings:

  - Made the column `passwordResetExpires` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `passwordResetExpires` DATETIME(3) NOT NULL;
