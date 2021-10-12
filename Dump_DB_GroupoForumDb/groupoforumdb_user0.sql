CREATE DATABASE  IF NOT EXISTS `groupoforumdb` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `groupoforumdb`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: groupoforumdb
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` smallint unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `moderation` tinyint DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (22,'TEST','TEST@gmail.com','TEST',0),(23,'Axelle','Axelle@gmail.com','$2b$10$UP1OmWtMSMikJK5HyRJ5lODSMCDN7PVTvxPjJQdC4i5MdYgPWLyui',0),(24,'Test','TEst','$2b$10$09NSOJ1DrNndharGWenaSupUKWenTA1yz87ZxFCcLrrm8teNNQ./y',0),(25,'Elvo','Bou@gmail.com','$2b$10$H5WilYfHjBsWS6qtyklA/ensnvXV2fi3HtPhL5mgTEUc66spSBn.y',0),(26,'Je suis un Test','TestTest','$2b$10$oojAfTyjcyaAV7uiple27uHwwZGt2SciW3Rut4YAIluRM.lmBxzOO',0),(27,'AxelleTest','AxelleTest@gmail.com','$2b$10$ODjca2z0rE3WxR8TB4M5Qu0YhNaBHBUID8wOc3V7K4aupldZ.QWae',0),(29,'groupomania','groupomania@gmail.com','$2b$10$2IBLB2kQTORj4zaTltTk2./cp2yyLCU5v6.zYrfLk/J9e99nNHC5O',1),(30,'Elvo','Elvo@gmail.com','$2b$10$RwBvG.RP.iZdShv9AUyg/eCMtBzEeA3L0TpHm.LaUlD3p5VWDPdf.',0),(31,'Axelle','Axelle@gmail.com','$2b$10$rGOZ1/6mGMvAvgYcdobqjO2jAH9R6mWhM/as6Jyqqxl7wpN/y5Ai.',0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-12 17:14:45
