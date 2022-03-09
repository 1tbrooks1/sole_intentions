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
-- Table structure for table `cartitem`
--

DROP TABLE IF EXISTS `cartitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cartitem` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) DEFAULT NULL,
  `shoe_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `shoe_id` (`shoe_id`),
  CONSTRAINT `cartitem_ibfk_1` FOREIGN KEY (`shoe_id`) REFERENCES `shoe` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cartitem`
--

LOCK TABLES `cartitem` WRITE;
/*!40000 ALTER TABLE `cartitem` DISABLE KEYS */;
/*!40000 ALTER TABLE `cartitem` ENABLE KEYS */;
UNLOCK TABLES;

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
INSERT INTO `sessions` VALUES ('HyTyOs-3dDiW2lwo6gYhbKKcPOxX-iqs','2022-03-10 16:27:41','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-03-09 07:26:32','2022-03-09 16:27:41');
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
  `our_price` decimal(10,0) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `year` decimal(10,0) NOT NULL,
  `description` text,
  `filename` varchar(255) NOT NULL,
  `price` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shoe`
--

LOCK TABLES `shoe` WRITE;
/*!40000 ALTER TABLE `shoe` DISABLE KEYS */;
INSERT INTO `shoe` VALUES (1,'Adidas Yeezy Boost 380 Alien',310,'Adidas',2019,'Yeezy has introduced a new silhouette to their product line with the adidas Yeezy Boost \n    380 Alien, now available on StockX. This model was originally known to be the Yeezy Boost 350 V3, \n    but upon release it was given its own name. This 380 Alien features a never before seen Primeknit \n    pattern on its upper and lacks the traditional lateral side strip. An upgraded thicker Boost midsole \n    and engineered outsole grip complete the design.','Alien.jpg','price_1KbIsNDT393wRvxWSM70EonW','2022-03-09 07:06:33','2022-03-09 07:06:33'),(2,'Nike Air Max 1 Atmos Safari',610,'Nike',2016,'The Atmos x Air Max 1 \'Safari\' is a 2016 re-release of a classic 2002 collaboration \n        with Japanese brand Atmos. The reissue features the same color-blocking as the original but swaps \n        out the 2002s canvas toe box and gum sole for a hairy suede toe box and ice-blue translucent sole.','AtmosSafari.jpg','price_1KbIslDT393wRvxWBNsg522o','2022-03-09 07:06:33','2022-03-09 07:06:33'),(3,'Adidas Yeezy Boost 350 V2 Beluga 2.0',575,'Adidas',2017,'The Yeezy Beluga 2.0 takes Kanye West\'s famous adidas sneakers full circle by returning to the \n    colors of the first adidas Yeezy Boost 350 V2. While the original colorway featured a bright orange \n    (officially Solar Red) stripe across the side, the 2017 release of the Yeezy Beluga colorway is much more subtle. \n    This colorway utilizes the same Zebra-like stripes as the original but the SPLY-350 branding is the only part of the \n    upper with a contrasted color-this time called Bold Orange.','Beluga2.jpg','price_1KbIt6DT393wRvxWQcNwpFWI','2022-03-09 07:06:33','2022-03-09 07:06:33'),(4,'New Balance 550 Shadow',115,'NewBalance',2021,'The New Balance 550 Shadow features a black and grey leather upper with mesh paneling around the collars. \n    A puffed New Balance logo and \"550\" branding on the quarter panels nods to the origins of New Balance\'s basketball line.','Black550.jpg','price_1KbIucDT393wRvxW0fFdycDB','2022-03-09 07:06:33','2022-03-09 07:06:33'),(5,'Air Jordan 6 Retro Carmine',270,'Jordan',2021,'The Air Jordan 6 Carmine returned in its original form in 2021. The nearly 20-year-old colorway \n    first made its appearance in 1991 during Michael Jordan’s ’91-’92 season and brought in a new form of color \n    blocking to the signature silhouette. The Air Jordan 6 Carmine combines red, white, and black colors to \n    represent the Chicago Bulls’ signature colors. The upper features bold red and white colors that help the \n    model pop while on foot. From there, the upper is met with a white and black midsole, with hits of an icy blue \n    outsole appear as well. The final touch to this OG’s return is the signature “Nike Air” on the heel, replacing \n    2008 and 2012 retros’ “Jumpman” logo.','Carmines.jpg','price_1KbIvADT393wRvxW2XsPBbri','2022-03-09 07:06:33','2022-03-09 07:06:33'),(6,'Air Jordan 13 Retro Flint',300,'Jordan',2020,'With previous retros in 2005 and 2010, this is the third time that the Jordan 13 Flint has been \n    reintroduced. This Jordan 13 Retro consists of a navy mesh and white leather upper with flint grey suede underlays. \n    A Jumpman holograph on the ankle, 3M detailing throughout the upper, and Carolina blue branding on the tongue completes \n    the design.','Flint.jpg','price_1KbIvcDT393wRvxWC7rQuvko','2022-03-09 07:06:33','2022-03-09 07:06:33'),(7,'Air Jordan 1 Retro High OG Light Fusion Red',160,'Jordan',2021,'The Air Jordan 1 Light Fusion Red features a white leather upper with Light Fusion Red overlays and \n    Laser Orange on the Swoosh and ankle wrap. A woven Nike label stitched atop the tongue completes the design.','Fusion.jpg','price_1KbIvxDT393wRvxWcH16edIR','2022-03-09 07:06:33','2022-03-09 07:06:33'),(8,'Air Jordan 6 Retro Gold Hoops',200,'Jordan',2021,'The women\'s Air Jordan 6 Gold Hoops (W) draws inspiration from gold hoop earrings and their allure. \n    Its design is composed of a white tumbled leather upper with hints of pale pink on the tongue. From there, interconnected \n    gold hoops and Jumpman emblems are attached to the shoe’s signature lace lock','Hoops.jpg','price_1KbIwQDT393wRvxWweMrCzNQ','2022-03-09 07:06:33','2022-03-09 07:06:33'),(9,'New Balance 990v3 x JJJJound',400,'NewBalance',2022,'JJJJound and New Balance teamed up again for their second 990v3 design with the New Balance 990v3 JJJJound Olive.\n    Arriving with olive mesh and premium suede uppers, the New Balance 990v3 JJJJound Olive uses a minimalist approach to create \n    a shoe geared for everyday wear. Black New Balance logos and overlays bring sharp contrast to the tonal green background. A silver \n    reflective heel wrap with JJJJound branding adds a custom touch. From there, a cream ENCAP sole at the base completes the design.','JJJJound.jpg','price_1KbIwmDT393wRvxWbV2GoPgu','2022-03-09 07:06:33','2022-03-09 07:06:33'),(10,'Air Jordan 1 x SB LA to Chicago',590,'Jordan',2019,'This AJ 1 SB comes with a white upper plus blue and yellow accents, \n    yellow Nike \"Swoosh\", white midsole, and a black sole. Underneath the purple and yellow coloring\n    you can find some other colors, but only when the paint is irritated. GET TO SKATING!!!','LaToChi.jpg','price_1KaTYjDT393wRvxWhswRyLW5','2022-03-09 07:06:33','2022-03-09 07:06:33'),(11,'Air Jordan 1 x Off White UNC ',2500,'Jordan',2018,'The third installment of the Air Jordan and Virgil Agbloh collaboration. \n        This sneakers pays homage to the glory days of Jordan in college at UNC. \n        The sneakers come in a white, dark powder blue and cone colorway, with \n        a white and blue deconstructed leather upper and Off-White detailing throughout.','OffWhiteUNC.jpg','price_1KaWMODT393wRvxWQqj9g0oJ','2022-03-09 07:06:33','2022-03-09 07:06:33'),(12,'Nike Air Max 1 x Parra',675,'Nike',2018,'Legendary Dutch artist Parra and Nike have once \n        again teamed up for their first collab in over a decade!\n        This Nike Air Max 1 takes abstract interpretations of cityscape and \n        landscape imagery, applying it to the Air Max\'s iconic silhouette. \n        Using his traditional color palette of white, light blue, red, grey, \n        and pink, this pair is sure to turn heads with its unique and vibrant style.','ParraAM1.jpg','price_1KaWMkDT393wRvxWdXh9zY6X','2022-03-09 07:06:33','2022-03-09 07:06:33'),(13,'Air Jordan 1 Rookie of the Year',665,'Jordan',2018,'What better way to celebrate MJs rookie of the year award than clinching \n        the Jordan 1 Retro High Rookie of the Year. This unique shoe comes with a white and \n        harvest leather upper, black Nike “Swoosh”, white midsole, and a black sole.','ROTY.jpg','price_1KaWN8DT393wRvxWyj3DCHEI','2022-03-09 07:06:33','2022-03-09 07:06:33'),(14,'Air Jordan 1 Retro High Royal Toe',300,'Jordan',2020,'The Royal Toe takes inspiration from the original Jordan 1 Royal colorway \n    (which released in 1985) and adds design elements of the Black Toe 1 to create a familiar, \n    but new dialogue. This AJ 1 features a white and royal leather upper with black leather overlays \n    and detailing. A white midsole, royal outsole, and branded leather tongue tag completes this design.','RoyalToe.jpg','price_1KbIxFDT393wRvxWGdTQITfs','2022-03-09 07:06:33','2022-03-09 07:06:33'),(15,'Air Jordan 1 Shattered Backboard',1600,'Jordan',2015,'The name “Shattered Backboard” comes from a moment after Michael Jordans \n    rookie season, in the summer of 1985, when he played in an exhibition game in Italy. \n    Jordan, wearing the orange, black, and white of Stefanel Trieste, hit a dunk so hard \n    he shattered the glass backboard.','SBB.jpg','price_1KaWNVDT393wRvxWLW6ULrgi','2022-03-09 07:06:33','2022-03-09 07:06:33'),(16,'Air Jordan 1 Retro High OG Seafoam',270,'Jordan',2021,'The women\'s Air Jordan 1 High Seafoam (W) arrives in a smooth white leather \n    construction with Seafoam Durabuck overlays and Swooshes. On the laces, crisp bronze trimming \n    stands out against the design\'s subtle coloration.','Seafoam.jpg','price_1KbIxaDT393wRvxW8p4vywnz','2022-03-09 07:06:33','2022-03-09 07:06:33'),(17,'Nike x Stussy Air Zoom Spiridon Fossil',565,'Nike',2020,'Stussy teams up with Nike once again to deliver the Nike Air Zoom Spiridon \n    Cage 2 Stussy Fossil. After originally debuting in 2003, this design received a refresh \n    with the help of lifestyle label Stussy. This Spridion Cage 2 consists of a mesh upper with \n    woven textile overlays and a black Swoosh. A caged Zoom Air unit, Stussy branding on the heel \n    and toe, and Fossil sole completes the design.','Spiridon.jpg','price_1KaWNtDT393wRvxWYVKwtWov','2022-03-09 07:06:33','2022-03-09 07:06:33'),(18,'Adidas Yeezy Boost 350 V2 Static',400,'Adidas',2018,'Electrify your sneaker rotation with the adidas Yeezy Boost 350 V2 Static. \n        This Yeezy 350 V2 comes with a grey and white upper and a white sole. The see through upper helps\n        you to show off the cool socks in you lost a long time ago.','Static.jpg','price_1KaWOFDT393wRvxWLM0Yjlas','2022-03-09 07:06:33','2022-03-09 07:06:33'),(19,'Nike Air Force 1 Low x Supreme Wheat',215,'Nike',2021,'Drawing inspiration from classic work boots, the Nike Air Force 1 Low SP \n        Supreme Wheat features a Flax Durabuck upper with Supreme Box Logo insignias on the \n        lateral heels. At the base, a matching Flax Air sole completes the design. This model \n        was exclusively sold through Supreme stores and their online shops.','SupAF1.jpg','price_1KaWP8DT393wRvxWYgEoTnOv','2022-03-09 07:06:33','2022-03-09 07:06:33'),(20,'Nike Air Max 98 x Supreme Snakeskin',450,'Nike',2016,'The Supreme x Air Max 98 \'Snakeskin\' puts snakeskin detailing on its overlays. \n    The rest of the shoe incorporates a metallic silver mesh with reflective piping, while the \n    heel tab and toe sport Supreme branding, with \'World Famous\' across the heels.','SupAM98.jpg','price_1KbIyADT393wRvxWDUIXZPxN','2022-03-09 07:06:33','2022-03-09 07:06:33'),(21,'Air Jordan 4 Retro x Travis Scott Cactus Jack',1000,'Jordan',2018,'The only way to describe the Travis Scott Air Jordan 4 Retros properly would be \n    to use the rappers own adlib: la flame. These Jordan 4s were made in collaboration with rapper, \n    Travis Scott and nicknamed the \"Cactus Jack\" edition. Similar in design to the infamous Eminem pair, \n    these feature a lighter shade of blue suede on the upper. Black accents, a red liner, paint splatter \n    detailing, a white midsole and \"Cactus Jack\" branding on the back heel tab finish things off for this pair.','Travis.jpg','price_1KbIyVDT393wRvxW68nLAxFw','2022-03-09 07:06:33','2022-03-09 07:06:33'),(22,'New Balance 550 UNC White University Blue',175,'NewBalance',2022,'New Balance has a handful of firm favorites among the sneakerhead community, \n    but none have taken off quite like its 550 silhouette. As expected, the retro Basketball \n    Oxford shape is presented in white to show off its OG shapes and style, complete with a \n    padded “N” emblem on the mid-panel alongside old-school branding on the tongue, “NB” emblems \n    on the rear, and “550” gracing the vamp.','UNC550.jpg','price_1KbIzSDT393wRvxWn5UoUXni','2022-03-09 07:06:33','2022-03-09 07:06:33'),(23,'Adidas Yeezy Boost 700 Wave Runner',400,'Adidas',2017,'First releasing in November of 2017, the Yeezy Boost 700s represented what \n        was a significant shift in Kanyes design aesthetic, moving from the minimalistic silhouettes \n        of early Yeezy seasons to this chunky runner model. It once again showed how Kanye stays ahead \n        of the curve, as chunkier sneakers became more en vogue in 2018. The shoe features an upper with \n        grey and black suede overlays, premium leather with blue mesh underlays, neon green laces, and its \n        signature chunky midsole with encapsulated Boost technology.','WaveRunner.jpg','price_1KaWPTDT393wRvxW1VNawTZB','2022-03-09 07:06:33','2022-03-09 07:06:33'),(24,'Adidas Yeezy Boost 350 V2 Zebra',425,'Adidas',2017,'Adidas is back with their latest Yeezy Boost 350 V2. Fresh off the heels of \n        NBA All-Star Weekend, these Yeezy\'s are nicknamed the \"Zebras,\" and come in a classic white, \n        black and red color scheme. Sporting a white-based Primeknit upper with black accents giving \n        off a Zebra stripe vibe, “SPLY-350” displayed across the sides in red finished off by a translucent \n        BOOST cushioned sole. To date they are the most limited adidas Yeezy release and have instantly become \n        one of the most popular colorways','Zebras.jpg','price_1KaWPrDT393wRvxW9KJe2SF6','2022-03-09 07:06:33','2022-03-09 07:06:33');
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

-- Dump completed on 2022-03-09 14:52:43
