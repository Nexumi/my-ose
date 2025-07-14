if (!window.OSE_Running && window.location.href.includes("opensauce.com/exhibits") {
  window.OSE_Running = true;

  // ==UserScript==
  // @name         Open Sauce Exhibits Highlighter
  // @namespace    http://jpkit.us/
  // @version      0.1
  // @description  Highlight interesting exhibits
  // @author       Nexumi
  // @match        https://opensauce.com/exhibits/
  // @icon         https://web.jpkit.us/favicon.ico
  // @grant        none
  // ==/UserScript==
  
  (function() {
      'use strict';
  
      const interests = [
          'Rubik\'s Cube Solving Robot',
          'Real Life Gundam',
          'Rob the infamous AI droid',
          'Instant Floptics',
          '3D Printer Boeing 737 Flight Simulator',
          'Wooden Mechanical Calculator',
          'Mario Party Minigame Robot',
          'AUTONOMOUS CAR RACING',
          'Joule Thief - AA Battery Vampire',
          'The Gateway',
          'CRITTER: Tree climbing robot',
          'Gems of Science',
          'Sandify robot pattern creator',
          'Meshtastic - Communicate without the internet',
          'Openterface Mini-KVM: Turn Your Laptop into a KVM Console',
          'Real Life AdBlock',
          'Engineering Art Show',
          'Ubo Pod: Open Source Raspberry Pi based Development Platform For Deeply Integrated, Self-hosted, and Interactive Applications',
          'Laser Art - Becoming a Laserist',
          'LED Matrix Snowboards',
          'High Powered Foam Blaster - Open Source, 3D printed, you too can make one!',
          'The World\'s Largest Laptop',
          'Robot making toy airplane',
          'TrackStacker : Open Source, Modular, Magnetic, Marble Toys!',
          '1-Bit Photo Booth',
          'Cursed Controllers 2025',
          'Spyntonia 1 | Tornadoes of Light',
          'Impact Zone! The Amazing Vacuum Powered Supercollider!',
          'Arduino-controlled Music!',
          'Magic Chess for Wizards & Lonely People',
          'Robo-Foosball',
      ];
  
      const noticed = [
          'DIY Multitool',
          'Internet over String',
          'Robotic Sketch Pad',
          'cZip: Image Based Encryption',
          '3D Scanning by WhitCorp',
          'Paper Programmer',
          'Make your own take-home swag! Brought to you by 200+ teenagers.',
          'I\'ve created an open source tool that allows you to intercept and hijack a vehicles CAN bus system. You\'ll be able to control a vehicles functions, learn how to reverse engineer car signals, and learn how to get started hacking your own cars.',
      ]
  
      const must = [
          'Unofficial DIY Open Sauce trinket',
      ]
  
      const highlight = () => {
          setTimeout(() => {
              const exhibits = document.getElementsByClassName('MuiBox-root css-104r5p2');
              for (const exhibit of exhibits) {
                  const name = exhibit.children[0].children[1].children[0].innerText;
                  if (interests.includes(name)) {
                      exhibit.style.backgroundColor = 'yellow';
                  } else if (noticed.includes(name)) {
                      exhibit.style.backgroundColor = 'lime';
                  } else if (must.includes(name)) {
                      exhibit.style.backgroundColor = 'skyblue';
                  } else {
                      exhibit.style.backgroundColor = '';
                  }
              }
          }, 100);
      }
  
      const navbar = document.getElementsByClassName('MuiPagination-ul css-nhb8h9')[0];
      navbar.addEventListener('click', highlight);
      highlight();
  })();
}
