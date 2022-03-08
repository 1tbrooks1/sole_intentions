-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: sole_intentions_db
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('Ax0WUimk3qZ--cOmWiUHSUtGGaZxMBEd','2022-03-08 23:41:44','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-03-07 20:46:35','2022-03-07 23:41:44');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shoe`
--

DROP TABLE IF EXISTS `shoe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shoe` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `year` decimal(10,0) NOT NULL,
  `description` text,
  `filename` varchar(255) NOT NULL,
  `in_cart` tinyint(1) DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shoe`
--

LOCK TABLES `shoe` WRITE;
/*!40000 ALTER TABLE `shoe` DISABLE KEYS */;
INSERT INTO `shoe` VALUES (1,'Nike Air Max 1 Atmos Safari',610,'Nike',2016,'The Atmos x Air Max 1 \'Safari\' is a 2016 re-release of a classic 2002 collaboration \n        with Japanese brand Atmos. The reissue features the same color-blocking as the original but swaps \n        out the 2002s canvas toe box and gum sole for a hairy suede toe box and ice-blue translucent sole.','AtmosSafari.jpg',0,'2022-03-07 20:23:40','2022-03-07 20:23:40'),(2,'Adidas Yeezy Boost 350 V2 Beluga',575,'Adidas',2016,'The adidas Yeezy 350 Boost V2 takes the silhouette that \n        Kanye West made famous for adidas Originals and gives it new life.\n        The low top Yeezy Boost 350 features a full length Boost cushioning system and a high end feel \n        that has made it the go-to sneaker for everyone from celebrities like Kim Kardashian-West, \n        Jay-Z, 2 Chainz and Future, as well as for athletes such as Nick \"Swaggy P\" Young, Andrew Wiggins, \n        Lewis Hamilton and anyone else who can get their feet in a pair.','Beluga2.jpg',0,'2022-03-07 20:23:40','2022-03-07 20:23:40'),(3,'Air Jordan 1 x SB LA to Chicago',590,'Jordan',2019,'This AJ 1 SB comes with a white upper plus blue and yellow accents, \n        yellow Nike \"Swoosh\", white midsole, and a black sole. Underneath the purple and yellow coloring\n        you can find some other colors, but only when the paint is irritated. GET TO SKATING!!!','LaToChi.jpg',0,'2022-03-07 20:23:40','2022-03-07 20:23:40'),(4,'Air Jordan 1 x Off White UNC ',2500,'Jordan',2018,'The third installment of the Air Jordan and Virgil Agbloh collaboration. \n        This sneakers pays homage to the glory days of Jordan in college at UNC. \n        The sneakers come in a white, dark powder blue and cone colorway, with \n        a white and blue deconstructed leather upper and Off-White detailing throughout.','OffWhiteUNC.jpg',0,'2022-03-07 20:23:40','2022-03-07 20:23:40'),(5,'Nike Air Max 1 x Parra',675,'Nike',2018,'Legendary Dutch artist Parra and Nike have once \n        again teamed up for their first collab in over a decade!\n        This Nike Air Max 1 takes abstract interpretations of cityscape and \n        landscape imagery, applying it to the Air Max\'s iconic silhouette. \n        Using his traditional color palette of white, light blue, red, grey, \n        and pink, this pair is sure to turn heads with its unique and vibrant style.','ParraAM1.jpg',0,'2022-03-07 20:23:40','2022-03-07 20:23:40'),(6,'Air Jordan 1 Rookie of the Year',665,'Jordan',2018,'What better way to celebrate MJs rookie of the year award than clinching \n        the Jordan 1 Retro High Rookie of the Year. This unique shoe comes with a white and \n        harvest leather upper, black Nike “Swoosh”, white midsole, and a black sole.','ROTY.jpg',0,'2022-03-07 20:23:40','2022-03-07 20:23:40'),(7,'Air Jordan 1 Shattered Backboard',1600,'Jordan',2015,'The name “Shattered Backboard” comes from a moment after Michael Jordans \n        rookie season, in the summer of 1985, when he played in an exhibition game in Italy. \n        Jordan, wearing the orange, black, and white of Stefanel Trieste, hit a dunk so hard \n        he shattered the glass backboard.','SBB.jpg',0,'2022-03-07 20:23:40','2022-03-07 20:23:40'),(8,'Nike x Stussy Air Zoom Spiridon Fossil',565,'Nike',2020,'Stussy teams up with Nike once again to deliver the Nike Air Zoom Spiridon \n        Cage 2 Stussy Fossil. After originally debuting in 2003, this design received a refresh \n        with the help of lifestyle label Stussy. This Spridion Cage 2 consists of a mesh upper with \n        woven textile overlays and a black Swoosh. A caged Zoom Air unit, Stussy branding on the heel \n        and toe, and Fossil sole completes the design.','Spiridon.jpg',0,'2022-03-07 20:23:40','2022-03-07 20:23:40'),(9,'Adidas Yeezy Boost 350 V2 Static',400,'Adidas',2018,'Electrify your sneaker rotation with the adidas Yeezy Boost 350 V2 Static. \n        This Yeezy 350 V2 comes with a grey and white upper and a white sole. The see through upper helps\n        you to show off the cool socks in you lost a long time ago.','Static.jpg',0,'2022-03-07 20:23:40','2022-03-07 20:23:40'),(10,'Nike Air Force 1 Low x Supreme Wheat',215,'Nike',2021,'Drawing inspiration from classic work boots, the Nike Air Force 1 Low SP \n        Supreme Wheat features a Flax Durabuck upper with Supreme Box Logo insignias on the \n        lateral heels. At the base, a matching Flax Air sole completes the design. This model \n        was exclusively sold through Supreme stores and their online shops.','SupAF1.jpg',0,'2022-03-07 20:23:40','2022-03-07 20:23:40'),(11,'Adidas Yeezy Boost 700 Wave Runner',400,'Adidas',2017,'First releasing in November of 2017, the Yeezy Boost 700s represented what \n        was a significant shift in Kanyes design aesthetic, moving from the minimalistic silhouettes \n        of early Yeezy seasons to this chunky runner model. It once again showed how Kanye stays ahead \n        of the curve, as chunkier sneakers became more en vogue in 2018. The shoe features an upper with \n        grey and black suede overlays, premium leather with blue mesh underlays, neon green laces, and its \n        signature chunky midsole with encapsulated Boost technology.','WaveRunner.jpg',0,'2022-03-07 20:23:40','2022-03-07 20:23:40'),(12,'Adidas Yeezy Boost 350 V2 Zebra',425,'Adidas',2017,'Adidas is back with their latest Yeezy Boost 350 V2. Fresh off the heels of \n        NBA All-Star Weekend, these Yeezy\'s are nicknamed the \"Zebras,\" and come in a classic white, \n        black and red color scheme. Sporting a white-based Primeknit upper with black accents giving \n        off a Zebra stripe vibe, “SPLY-350” displayed across the sides in red finished off by a translucent \n        BOOST cushioned sole. To date they are the most limited adidas Yeezy release and have instantly become \n        one of the most popular colorways','Zebras.jpg',0,'2022-03-07 20:23:40','2022-03-07 20:23:40');
/*!40000 ALTER TABLE `shoe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'The Shoe Gawd','shoegawd@yahoo.com','ShoeGawd'),(2,'Waffle Fry','wafflefry@yahoo.com','WaffleFry'),(3,'Rigatoni Lover','iloverigatonis@yahoo.com','Rigatoni');
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

-- Dump completed on 2022-03-07 19:10:06
