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
-- Table structure for table `patient_head_assessment`
--

DROP TABLE IF EXISTS `patient_head_assessment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_head_assessment` (
  `patient_head_assessment_id` int NOT NULL,
  `patient_id` int DEFAULT NULL,
  `patient_head` varchar(45) DEFAULT NULL,
  `patient_hair` varchar(45) DEFAULT NULL,
  `patient_face` varchar(45) DEFAULT NULL,
  `patient_eyewear` varchar(45) DEFAULT NULL,
  `patient_eye_sclera` varchar(45) DEFAULT NULL,
  `patient_eye_conjunctivae` varchar(45) DEFAULT NULL,
  `patient_eye_drainage` varchar(45) DEFAULT NULL,
  `patient_eye_pupils_equal` varchar(45) DEFAULT NULL,
  `patient_eye_round` varchar(45) DEFAULT NULL,
  `patient_eye_reactive_to_light` varchar(45) DEFAULT NULL,
  `patient_left_eye_accomodations` varchar(45) DEFAULT NULL,
  `patient_right_eye_accomodations` varchar(45) DEFAULT NULL,
  `patient_eye_convergence` varchar(45) DEFAULT NULL,
  `patient_eye_field_of_vision` varchar(45) DEFAULT NULL,
  `patient_ears_symmetrical` varchar(45) DEFAULT NULL,
  `patient_ears_canal` varchar(45) DEFAULT NULL,
  `patient_nose_left_nare` varchar(45) DEFAULT NULL,
  `patient_nose_right_nare` varchar(45) DEFAULT NULL,
  `patient_oral_mucosa` varchar(45) DEFAULT NULL,
  `patient_oral_teeth` varchar(45) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL,
  `by_user` varchar(100) NOT NULL,
  PRIMARY KEY (`patient_head_assessment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_head_assessment`
--

LOCK TABLES `patient_head_assessment` WRITE;
/*!40000 ALTER TABLE `patient_head_assessment` DISABLE KEYS */;
/*!40000 ALTER TABLE `patient_head_assessment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-31 11:43:28
