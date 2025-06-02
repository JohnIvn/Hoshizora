# Hoshizora Intergalactic SpaceWays

Travel Agency for Your Exclusive and Seamless Travel Experiences Beyond Earth

"Providing Unmatched Luxury, Safety, and Expertise in the New Frontier of Space Exploration."

## ABOUT

Hoshizora Intergalactic SpaceWays is a futuristic space travel agency that delivers a luxurious and seamless travel
experience across the galaxy. From orbital getaways to planetary vacations, our platform allows guests to explore
beyond Earth with ease and confidence.

We utilize RFID and NFC technology to provide smart card access for travelers — enabling secure, efficient, and
personalized boarding and disembarkation across multiple interstellar destinations.

## REQUIREMENTS

To run this project locally, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- A modern browser (for testing)
- Web server (e.g., Express.js for backend)
- RFID/NFC Reader compatible with your kiosk setup
- Any Database Access (This is built with Firebase)

## INSTALLATION

1. Clone the Repository:
   git clone https://github.com/JohnIvn/Hoshizora.git
   cd tapigo

2. Install Dependencies:
   npm install
   OR
   yarn install

3. Configure Environment:
   Create a .env file in the root directory and add your configuration:

4. Run the hardware:
   Connect the server as the same wifi as the Esp32/Arduino R4 and connect the MFRCC 522 (Or any other scanning module) module to the circuit.

   The arduino script is inside Hardware/Ino.

5. Run the Development Server:

   4a. Backend
   npm run backend
   OR
   yarn backend

   4b. Frontend
   npm run frontend
   OR
   yarn frontend

   4c. Hardware
   npm run hardware
   OR
   yarn hardware

6. Access the Application (Locally):
   Open your browser and go to:

## FEATURES

- Book interstellar trips from a sleek and interactive interface
- NFC/RFID card system for boarding and identity verification
- Real-time access tracking at ports and hubs
- Personalized travel logs and digital credentials
- Admin panel for managing planetary destinations and flight schedules
- High-security authorization for luxury-class and mission-specific access

## TECHNOLOGIES USED

- Frontend: Angular and NG-ZORRO
- Backend: Node JS
- Database: Firebase
- Hardware: Esp32 & MFRCC 522

## LICENSE

See the LICENSE file for more information.

---

Thank you for choosing Hoshizora Intergalactic SpaceWays —
Your gateway to the stars begins with a single tap.
