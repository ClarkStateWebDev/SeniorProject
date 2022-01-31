-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: clark_state_ehr
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `provider_chart`
--

DROP TABLE IF EXISTS `provider_chart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `provider_chart` (
  `ProviderChartID` int NOT NULL,
  `patient_id` int DEFAULT NULL,
  `Patient_Name` varchar(255) DEFAULT NULL,
  `Age` int DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `Sex` varchar(10) DEFAULT NULL,
  `Identified_Gender` varchar(45) DEFAULT NULL,
  `Height` varchar(45) DEFAULT NULL,
  `Diagnosis` varchar(255) DEFAULT NULL,
  `Admit_Date` date DEFAULT NULL,
  `Allergies` varchar(255) DEFAULT NULL,
  `Code_Status` varchar(255) DEFAULT NULL,
  `Isolation_Status` varchar(255) DEFAULT NULL,
  `Activity_Level` varchar(255) DEFAULT NULL,
  `Diet` varchar(255) DEFAULT NULL,
  `Account_id` int DEFAULT NULL,
  `Medical_Record_ID` varchar(255) DEFAULT NULL,
  `Chief_Complaint` varchar(255) DEFAULT NULL,
  `Medical_History` varchar(255) DEFAULT NULL,
  `Family_History` varchar(255) DEFAULT NULL,
  `Review_of_Systems` varchar(255) DEFAULT NULL,
  `Progress_Notes` varchar(255) DEFAULT NULL,
  `Consultation_Notes` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL,
  `by_user` varchar(100) NOT NULL,
  PRIMARY KEY (`ProviderChartID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provider_chart`
--

LOCK TABLES `provider_chart` WRITE;
/*!40000 ALTER TABLE `provider_chart` DISABLE KEYS */;
/*!40000 ALTER TABLE `provider_chart` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-31 11:43:26
