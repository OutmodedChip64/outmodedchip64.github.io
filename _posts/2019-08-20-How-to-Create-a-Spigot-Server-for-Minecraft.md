---
layout: post
title: How to Create a Spigot Server for Minecraft | EFweb
name: How to Create a Spigot Server for Minecraft
background-image: /blog-images/How%20to%20Create%20a%20Spigot%20Server%20for%20Minecraft/TitlePicture.png
description: Learn how to create a Spigot server for Minecraft here on EFweb Blog!
---

Ever wanted to have your own server for you and your friends? Spigot is a great server for this, because you can also add plugins to your server to add cool features and fun commands. Here, I'll teach you how to create a Spigot server for you and your friends, or for the world to see.

## Things you'll need:
* Java (Download: https://www.java.com/en/download/)
* Spigot BuildTools (Download: https://hub.spigotmc.org/jenkins/job/BuildTools/lastSuccessfulBuild/artifact/target/BuildTools.jar)
* Spigot start file (Download: https://drive.google.com/file/d/1td5t8zez-sspVV4K0L0LWmpMC3mTI_nT/view?usp=sharing)

## Procedure:

1. Create an empty folder on your desktop called "BuildTools" and place the "BuildTools.jar" file in that folder.  
![Step 1](/blog-images/How%20to%20Create%20a%20Spigot%20Server%20for%20Minecraft/1.png)

2. Open command prompt, (Hold down the Windows Key and press R. Then type cmd and press enter.) type `cd C:\Users\USER\Desktop\BuildTools` (replace `USER` with your username), and press enter.  
![Step 2-1](/blog-images/How%20to%20Create%20a%20Spigot%20Server%20for%20Minecraft/2-1.png)
![Step 2-2](/blog-images/How%20to%20Create%20a%20Spigot%20Server%20for%20Minecraft/2-2.png)

3. Now, type `java -jar BuildTools.jar` and press enter. This process may take a while.  
![Step 3](/blog-images/How%20to%20Create%20a%20Spigot%20Server%20for%20Minecraft/3.png)

4. Once that is done, make another folder on your desktop (name it whatever you want, this will be your server folder) and from your "BuildTools" folder, drag the file named something like "spigot-x.xx.x.jar" (without quotes) into your new folder. Rename spigot-x.xx.x.jar to spigot.jar.  
![Step 4-1](/blog-images/How%20to%20Create%20a%20Spigot%20Server%20for%20Minecraft/4-1.png)
![Step 4-2](/blog-images/How%20to%20Create%20a%20Spigot%20Server%20for%20Minecraft/4-2.png)

5. Open your new folder and move the Spigot start file (called "start.bat") into your new folder. Double click this file. You will see something like `Loading libraries, please wait...`, a few more of lines, and finally `Press any key to continue...` This is normal, just press any key.  
![Step 5-1](/blog-images/How%20to%20Create%20a%20Spigot%20Server%20for%20Minecraft/5-1.png)
![Step 5-2](/blog-images/How%20to%20Create%20a%20Spigot%20Server%20for%20Minecraft/5-2.png)

6. In your new folder you will see some new files. Open the file named "eula.txt" and where it says "false" change it to "true" and save the file.  
![Step 6](/blog-images/How%20to%20Create%20a%20Spigot%20Server%20for%20Minecraft/6.png)

7. Now open "start.bat" again and it will start working now.  
![Step 7](/blog-images/How%20to%20Create%20a%20Spigot%20Server%20for%20Minecraft/7.png)

8. Time to find your IP! Open command prompt (Go back to #2 if you forget how) and type `ipconfig`. In your main network section, find "IPv4 Address" and write down that number.  
![Step 8](/blog-images/How%20to%20Create%20a%20Spigot%20Server%20for%20Minecraft/8.png)

9. Now you're finished! Anyone on your network can go on your server, but not if you're on different networks. If you would like to make it so anyone can go on the server, you must port-forward your network. There are many tutorials on how to do this on Google.

One more thing. To stop your server, just type stop. To start it up again, just double click the start.bat file.

Thanks for reading, and have fun!