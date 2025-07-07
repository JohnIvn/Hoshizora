# Hoshizora Intergalactic SpaceWays

> Travel Agency for Your Exclusive and Seamless Travel Experiences Beyond Earth

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Arduino](https://img.shields.io/badge/Arduino-00979D?logo=arduino&logoColor=white)
![ESP32](https://img.shields.io/badge/ESP32-Microcontroller-blue)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black)
![Angular](https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=white)
![NG-ZORRO](https://img.shields.io/badge/NG--ZORRO-1D71B8?logo=antdesign&logoColor=white)

---

## About

Hoshizora Intergalactic SpaceWays is a futuristic space travel agency that delivers a luxurious and seamless travel
experience across the galaxy. From orbital getaways to planetary vacations, our platform allows guests to explore
beyond Earth with ease and confidence.

We utilize RFID and NFC technology to provide smart card access for travelers — enabling secure, efficient, and
personalized boarding and disembarkation across multiple interstellar destinations.

---

## Table of Contents

- [Requirements](#requirements)
- [Features](#features)
- [Release](#release)
- [Installation](#installation)
- [Structure](#structure)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Requirements

To run this project locally, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- A modern browser (for testing)
- Web server (e.g., Express.js for backend)
- RFID/NFC Reader compatible with your kiosk setup
- Any Database Access (This is built with Firebase)

---

## Release

- Alternatively you can download the `.zip` file from the [Releases](https://github.com/JohnIvn/Hoshizora/releases) section.

---

## Features

- Book interstellar trips from a sleek and interactive interface
- NFC/RFID card system for boarding and identity verification
- Real-time access tracking at ports and hubs
- Personalized travel logs and digital credentials
- Admin panel for managing planetary destinations and flight schedules
- High-security authorization for luxury-class and mission-specific access
  
---

## Installation

### 1. Clone the Repository

```bash
   git clone https://github.com/JohnIvn/Hoshizora.git
```

### 2. Install Dependencies

Backend

```bash
cd backend
npm install
```

Frontend

```bash
cd frontend
npm install
```

Hardware

```bash
cd hardware
npm install
```

### 3. Configure Environment
Create a .env file in the root directory and add your configuration:

Backend

```bash
PORT=
JWT_SECRET=

FIREBASE_DATABASE_URL=
FIREBASE_STORAGE_BUCKET=
```

Hardware

```bash
PORT=
JWT_SECRET=

FIREBASE_DATABASE_URL=
FIREBASE_STORAGE_BUCKET=
```

Export your firebase service account and rename it:

```bash
key.json
```
### 4. Wiring Diagram

ESP32:

| MFRC522 Pin | ESP32 Pin          |
| ----------- | ------------------ |
| SDA         | 5                  |
| SCK         | 18                 |
| MOSI        | 23                 |
| MISO        | 19                 |
| IRQ         | Not connected      |
| GND         | GND                |
| RST         | 4                  |
| 3.3V        | 3.3V (**not 5V!**) |

Arduino UNO R3

| MFRC522 Pin | Arduino Uno Pin    |
| ----------- | ------------------ |
| SDA         | 10                 |
| SCK         | 13                 |
| MOSI        | 11                 |
| MISO        | 12                 |
| IRQ         | Not connected      |
| GND         | GND                |
| RST         | 9                  |
| 3.3V        | 3.3V (**not 5V!**) |

### 5. Run the hardware

The arduino script is inside Ino/rfid.

### 6. Run the server

npm
```bash
   cd backend
   npm run backend

   cd frontend
   npm run frontend

   cd hardware
   npm run hardware
```
yarn
```bash
   cd backend
   yarn backend

   cd frontend
   yarn frontend

   cd hardware
   yarn hardware
```
---

## Structure

```bash
/
├── Backend/
│   ├── Controllers/
│   ├── Routes/
│   └── Services/
├── Frontend/
│   ├── public/
│   └── src/
│       └── app/
│           ├── about/
│           ├── components/
│           └── home/                    
└── Hardware/
│   ├── Services/
│   └── Socket/
└── Ino/
    └── rfid/                  
```

---

## Technologies-Used

| Category | Tools                              |
| -------- | ---------------------------------- |
| Frontend | Angular & NG ZORRO                 | 
| Backend  | Node JS & Socket IO                |
| Database | Firebase                           |
| Hardware | Esp 32, Arduino UNO R3 & RC522     |

---

## Testing

Once everything is set up and the server is running, you can test simply by going to the url.

---

## License

See the [LICENSE](LICENSE) file for more information.

---

> Built with ❤️ by JohnIvn
