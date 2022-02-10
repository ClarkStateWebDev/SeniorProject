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
-- Table structure for table `patient_neuorlogical_mental_status`
--

DROP TABLE IF EXISTS `patient_neuorlogical_mental_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_neuorlogical_mental_status` (
  `patient_neuorlogical_mental_status_id` int NOT NULL,
  `patient_id` int DEFAULT NULL,
  `patient_level_of_consciousness` varchar(45) DEFAULT NULL,
  `patient_oriented_person` varchar(45) DEFAULT NULL,
  `patient_oriented_place` varchar(45) DEFAULT NULL,
  `patient_oriented_situation` varchar(45) DEFAULT NULL,
  `patient_disoriented_person` varchar(45) DEFAULT NULL,
  `patient_disoriented_place` varchar(45) DEFAULT NULL,
  `patient_disoriented_time` varchar(45) DEFAULT NULL,
  `patient_disoriented_situation` varchar(45) DEFAULT NULL,
  `patient_speech` varchar(45) DEFAULT NULL,
  `comments` varchar(45) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL,
  `by_user` varchar(100) NOT NULL,
  PRIMARY KEY (`patient_neuorlogical_mental_status_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_neuorlogical_mental_status`
--

LOCK TABLES `patient_neuorlogical_mental_status` WRITE;
/*!40000 ALTER TABLE `patient_neuorlogical_mental_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `patient_neuorlogical_mental_status` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-31 11:43:29