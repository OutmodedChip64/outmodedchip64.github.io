---
layout: post
name: How to dual boot Ubuntu 18.10 with Windows 10
background-image: /blog/blog-images/How%20to%20dual%20boot%20Ubuntu%2018.10%20with%20Windows%2010/TitlePicture.png
author: Everett Flynn
---

**EDIT: This story is for dual booting Ubuntu 18.10. If you would like to upgrade to a newer version, follow this tutorial, and then open terminal and type these commands:**

* **sudo apt update**
* **sudo apt upgrade**
* **sudo do-release-upgrade**

In this article, I will teach you exactly how to dual boot one of the most popular operating systems for dual booting with your own Windows 10 computer. If you don’t know what dual booting is, it is a way to have two operating systems on a computer which you can run each one by restarting your computer and choosing which one to boot up. If you don’t know what an operating system is, chances are this article is not for you.

## Prerequisites
* A computer with Windows 10 installed

* That computer capable of running Ubuntu:
  - 2 GHz dual-core processor or better
  - 2 GB RAM (system memory)
  - 25 GB or more of free hard drive space for Ubuntu’s files
  - VGA (or better) capable of 1024x768 screen resolution
  - A USB port for installation
  - (Optional, but helpful) Internet access
  
* The Ubuntu iso file (Download Ubuntu 18.10 [here](https://www.ubuntu.com/download/desktop))

* A USB drive of at least 2 GB

* Rufus for creating a bootable USB drive (Download will start immediately [here](https://github.com/pbatard/rufus/releases/download/v3.4/rufus-3.4.exe))

* (Optional, yet very highly recommended) A backup of your PC and a Windows Bootable USB drive

## Procedure

### Making a partition for Ubuntu
First of all, we need to give Ubuntu some space for its files and the files you store in Ubuntu.
1. Right-click the Start button at the bottom-left of the screen, and press “Disk Management”.  
![Step 1](/blog-images/How%20to%20dual%20boot%20Ubuntu%2018.10%20with%20Windows%2010/1.png)

2. Once it loads, at the bottom, under “Disk 0,” right-click the “Windows” partition and press “Shrink volume…”  
![Step 2](/blog-images/How%20to%20dual%20boot%20Ubuntu%2018.10%20with%20Windows%2010/2.png)

3. Now decide how much storage space you want to give Ubuntu, and multiply that by 1,024 (to convert GB to MB), but make sure you give it more than 25 GB. I would recommend at least 40 GB, but it’s your computer, and I don’t know why you are dual booting. Enter that number in the “Enter the amount of space to shrink in MB” part, and make sure that number is not bigger than the number in “Size of available shrink space in MB”.  
![Step 3](/blog-images/How%20to%20dual%20boot%20Ubuntu%2018.10%20with%20Windows%2010/3.png)


### Making a bootable USB drive for Ubuntu
Next, we need to make a bootable USB drive to install Ubuntu.
4. Now you should have a partition under “Disk 0” that has your amount of gigabytes and says “Unallocated,” so now you can close the Disk Management window. Next, plug in your USB drive, open Rufus (In the prerequisites), and do the following:
- “Device” = Select your USB drive
- “Boot selection” = Press “Select” and select the Ubuntu iso you downloaded in the prerequisites
- “Partition scheme” = Select MBR
- “Format options” = Keep everything default  
After you’ve done the above, go ahead and press “START”.  
![Step 4](/blog-images/How%20to%20dual%20boot%20Ubuntu%2018.10%20with%20Windows%2010/4.png)

### Booting up Ubuntu
Now, let’s boot into Ubuntu for installation.
5. When it finishes, you can close Rufus. Now we are going to check if Secure Boot is enabled in the BIOS. If you are sure Secure Boot is disabled, then you can skip this step. To enter the BIOS, hold down the Shift key while pressing restart on your computer. You should then come to a screen that says “Choose an option”. Select “Troubleshoot” > “Advanced options” > “UEFI Firmware Settings”.  
![Step 5](/blog-images/How%20to%20dual%20boot%20Ubuntu%2018.10%20with%20Windows%2010/5.jpg)

6. Now you should boot up into the BIOS (On my HP, it boot into a “Startup Menu” and I just chose the option that said “BIOS Setup”). Search through the settings for something like “Secure Boot Configuration” (I found it under “Security”), and select it. If it gives you a warning, just skip through it and disable secure boot. You will also want to search for and enable Legacy Support. After that, you can save changes to the BIOS and exit.  
![Step 6](/blog-images/How%20to%20dual%20boot%20Ubuntu%2018.10%20with%20Windows%2010/6.jpg)

7. Next, Google how to open the startup boot menu with your computer provider. On my HP, I continually press ESC while starting up my computer. Then, select Boot Device Options and choose your USB drive (The name should be the brand of the drive)  
![Step 7](/blog-images/How%20to%20dual%20boot%20Ubuntu%2018.10%20with%20Windows%2010/7.jpg)

### Installing Ubuntu
The fun part! It’s time to actually install Ubuntu.
8. Ubuntu should now boot up and take you to the installation wizard. Press “Install Ubuntu,” and on the next page select your keyboard layout. Then on the “Updates and other software” page choose “Normal installation” or “Minimal installation” (Your choice) and under that, check both of the checkboxes.  
![Step 8-1](/blog-images/How%20to%20dual%20boot%20Ubuntu%2018.10%20with%20Windows%2010/8-1.png)
![Step 8-2](/blog-images/How%20to%20dual%20boot%20Ubuntu%2018.10%20with%20Windows%2010/8-2.png)

9. Now, this step is the part where we tell Ubuntu to install on that empty space we made above. Choose “Something else” and press Continue. Now select your free space and press “+” at the bottom, and do the following:
- “Size” = This is where Ubuntu will install all of its components, so anywhere between 10–20 gigabytes is good. Choose how many gigabytes you want, multiply that by 1,024 (to convert GB to MB), and input it in the box
- “Type for new partition” = Keep the default
- “Location for the new partition” = Keep the default
- “Use as” = Keep this as “Ext4 journaling file system”
- “Mount point” = Put this as “/”  
Then press “OK”.  
![Step 9-1](/blog-images/How%20to%20dual%20boot%20Ubuntu%2018.10%20with%20Windows%2010/9-1.png)
![Step 9-2](/blog-images/How%20to%20dual%20boot%20Ubuntu%2018.10%20with%20Windows%2010/9-2.png)

10. Select the free space again, press “+,” and do the following:
- “Size” = If your RAM is 2 GB or under, put “2000”. If it is over 2 GB, do half your RAM size multiplied by 1,000
- “Type for new partition” = Keep the default
- “Location for the new partition” = Keep the default
- “Use as” = Put this as “swap area”  
Then press “OK”.  
![Step 10](/blog-images/How%20to%20dual%20boot%20Ubuntu%2018.10%20with%20Windows%2010/10.png)

11. Again press the free space, press “+,” and do the following:
- “Size” = Keep the default, as this will use the rest of the space for your files
- “Type for new partition” = Keep the default
- “Location for the new partition” = Keep the default
- “Use as” = Keep as “Ext4 journaling file system”
- “Mount point” = Put this as “/home”  
Press “OK,” then “Install Now,” and review your changes to make sure it won’t install on your Windows partition. Then lastly press “Continue”  
![Step 11-1](/blog-images/How%20to%20dual%20boot%20Ubuntu%2018.10%20with%20Windows%2010/11-1.png)
![Step 11-2](/blog-images/How%20to%20dual%20boot%20Ubuntu%2018.10%20with%20Windows%2010/11-2.png)

12. On the next steps, select your location, fill out the form called “Who are you?” and Ubuntu will start installing. Once done, press “Restart Now”  
![Step 12-1](/blog-images/How%20to%20dual%20boot%20Ubuntu%2018.10%20with%20Windows%2010/12-1.png)
![Step 12-2](/blog-images/How%20to%20dual%20boot%20Ubuntu%2018.10%20with%20Windows%2010/12-2.png)
![Step 12-3](/blog-images/How%20to%20dual%20boot%20Ubuntu%2018.10%20with%20Windows%2010/12-3.png)


### Booting into your newly installed Ubuntu
You did it! Now let’s boot into your new, dual booted Ubuntu!
13. If you boot into Windows after restarting, don’t panic. We just need to change your system’s boot order. Go up to question 5 to get into the BIOS again. Once in the BIOS, find “Boot Order”. I found it under “Storage,” but your computer may be different. Find the Ubuntu boot source and drag it to the top.  
![Step 13](/blog-images/How%20to%20dual%20boot%20Ubuntu%2018.10%20with%20Windows%2010/13.jpeg)

14. Save changes to the BIOS and exit. You should boot into GRUB, and you should see “Ubuntu 18.10” and “Windows Boot Manager”. Don’t panic if you don’t see Windows. If you don’t see Windows, read step 15. If not, boot into Ubuntu, and make it your own! You’ve finished!  
![Step 14](/blog-images/How%20to%20dual%20boot%20Ubuntu%2018.10%20with%20Windows%2010/14.png)

15. If you didn’t see “Windows Boot Manager” in GRUB, just boot into Ubuntu, go in “Applications,” and find “Terminal”. Then type “sudo update-grub”. It will probably ask for a password, so type in the password you set in step 12. Once it finishes, all you have to do is reboot Ubuntu and choose “Windows Boot Manager” in GRUB to go back to Windows!  

Thanks for reading, and happy dual booting!