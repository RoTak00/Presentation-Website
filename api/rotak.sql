-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: localhost    Database: rotak_backend
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.22.04.2

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
-- Table structure for table `blog_posts`
--

DROP TABLE IF EXISTS `blog_posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog_posts` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alias` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `header` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `ordering` int NOT NULL,
  `status` enum('active','inactive','deleted') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_posts`
--

LOCK TABLES `blog_posts` WRITE;
/*!40000 ALTER TABLE `blog_posts` DISABLE KEYS */;
INSERT INTO `blog_posts` VALUES (1,'Blog Post 1s','blog-post-1s','Welcome to this shitshow.adasd','blog-blog-post-1s.png','This is a nice blog post. Woah!!!sd','1st of Juned',3,'active','2023-06-27 01:42:55','2023-06-27 01:51:20'),(2,'blog post 2','blog-post-2','asfasf','blog-blog-post-2.png','asfasfasfas','safasfas',2,'inactive','2023-06-27 01:50:02','2023-06-27 01:51:20'),(4,'safasfasfas','safasfasfas','fasfasfasfasf','blog-safasfasfas.png','asfasfasfasfasa','asfasfasfasfasfas',1,'inactive','2023-06-27 01:51:10','2023-06-27 01:51:17');
/*!40000 ALTER TABLE `blog_posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_tags`
--

DROP TABLE IF EXISTS `blog_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog_tags` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `blog_post_id` bigint unsigned NOT NULL,
  `tag_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `blog_tags_blog_post_id_foreign` (`blog_post_id`),
  CONSTRAINT `blog_tags_blog_post_id_foreign` FOREIGN KEY (`blog_post_id`) REFERENCES `blog_posts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_tags`
--

LOCK TABLES `blog_tags` WRITE;
/*!40000 ALTER TABLE `blog_tags` DISABLE KEYS */;
INSERT INTO `blog_tags` VALUES (7,1,'yayyy','2023-06-27 01:49:40','2023-06-27 01:49:40'),(8,1,'trsr-egrsg-sg','2023-06-27 01:49:43','2023-06-27 01:49:43');
/*!40000 ALTER TABLE `blog_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gallery_images`
--

DROP TABLE IF EXISTS `gallery_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gallery_images` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `src` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alt` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `gallery_post_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `gallery_images_gallery_post_id_foreign` (`gallery_post_id`),
  CONSTRAINT `gallery_images_gallery_post_id_foreign` FOREIGN KEY (`gallery_post_id`) REFERENCES `gallery_posts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gallery_images`
--

LOCK TABLES `gallery_images` WRITE;
/*!40000 ALTER TABLE `gallery_images` DISABLE KEYS */;
INSERT INTO `gallery_images` VALUES (1,'everything-alright-1.png','','',1,'2023-06-22 15:42:17','2023-06-22 15:42:17'),(2,'everything-alright-2.png','','',1,'2023-06-22 15:42:17','2023-06-22 15:42:17');
/*!40000 ALTER TABLE `gallery_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gallery_posts`
--

DROP TABLE IF EXISTS `gallery_posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gallery_posts` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `alias` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('active','inactive','deleted') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gallery_posts`
--

LOCK TABLES `gallery_posts` WRITE;
/*!40000 ALTER TABLE `gallery_posts` DISABLE KEYS */;
INSERT INTO `gallery_posts` VALUES (1,'everything alright','svzxvzxvzxvzx','2023-06-06','everything-alright','inactive','2023-06-22 15:42:14','2023-06-22 15:42:14');
/*!40000 ALTER TABLE `gallery_posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_reset_tokens_table',1),(3,'2014_10_12_100000_create_password_resets_table',1),(4,'2019_08_19_000000_create_failed_jobs_table',1),(5,'2019_12_14_000001_create_personal_access_tokens_table',1),(6,'2023_05_21_134952_create_user_messages_table',1),(7,'2023_06_03_123414_create_projects_table',1),(8,'2023_06_07_064135_update_projects',1),(9,'2023_06_19_141343_create_gallery_posts_table',1),(10,'2023_06_19_141402_create_gallery_images_table',1),(13,'2023_06_24_110220_create_project_tags_table',2),(14,'2023_06_24_110412_update_projects_add_tags',2),(15,'2023_06_25_134414_add_ordering_projects',3),(20,'2023_06_27_033544_create_blog_posts_table',4),(21,'2023_06_27_033633_create_blog_tags_table',4);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_tags`
--

DROP TABLE IF EXISTS `project_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_tags` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `project_id` bigint unsigned NOT NULL,
  `tag_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `project_tags_project_id_foreign` (`project_id`),
  CONSTRAINT `project_tags_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_tags`
--

LOCK TABLES `project_tags` WRITE;
/*!40000 ALTER TABLE `project_tags` DISABLE KEYS */;
INSERT INTO `project_tags` VALUES (14,9,'joomla','2023-06-24 08:35:37','2023-06-24 08:35:37'),(15,9,'html','2023-06-24 08:35:40','2023-06-24 08:35:40'),(16,9,'css','2023-06-24 08:35:42','2023-06-24 08:35:42'),(17,9,'mysql','2023-06-24 08:35:45','2023-06-24 08:35:45'),(18,9,'python','2023-06-24 08:35:51','2023-06-24 08:35:51'),(19,9,'php','2023-06-24 08:35:58','2023-06-24 08:35:58'),(20,10,'joomla','2023-06-24 08:36:11','2023-06-24 08:36:11'),(21,10,'html','2023-06-24 08:36:16','2023-06-24 08:36:16'),(22,10,'css','2023-06-24 08:36:17','2023-06-24 08:36:17'),(23,10,'javascript','2023-06-24 08:36:20','2023-06-24 08:36:20'),(24,10,'volunteer','2023-06-24 08:36:28','2023-06-24 08:36:28'),(25,9,'javascript','2023-06-24 08:36:36','2023-06-24 08:36:36'),(27,11,'social','2023-06-24 08:36:50','2023-06-24 08:36:50'),(28,12,'html','2023-06-24 08:40:29','2023-06-24 08:40:29'),(29,12,'javascript','2023-06-24 08:40:33','2023-06-24 08:40:33'),(30,12,'jquery','2023-06-24 08:40:35','2023-06-24 08:40:35'),(31,12,'php','2023-06-24 08:40:37','2023-06-24 08:40:37'),(32,12,'css','2023-06-24 08:40:41','2023-06-24 08:40:41'),(33,12,'bootstrap','2023-06-24 08:40:43','2023-06-24 08:40:43'),(34,13,'social','2023-06-24 08:43:02','2023-06-24 08:43:02'),(35,13,'volunteering','2023-06-24 08:43:07','2023-06-24 08:43:07'),(36,11,'volunteering','2023-06-24 08:43:13','2023-06-24 08:43:13'),(37,14,'html','2023-06-24 08:44:48','2023-06-24 08:44:48'),(38,14,'css','2023-06-24 08:44:49','2023-06-24 08:44:49'),(39,14,'jquery','2023-06-24 08:44:52','2023-06-24 08:44:52'),(40,14,'javascript','2023-06-24 08:44:55','2023-06-24 08:44:55'),(41,14,'php','2023-06-24 08:44:56','2023-06-24 08:44:56'),(42,14,'youtube-api','2023-06-24 08:45:09','2023-06-24 08:45:09'),(43,15,'social','2023-06-24 08:48:49','2023-06-24 08:48:49'),(44,15,'volunteering','2023-06-24 08:48:56','2023-06-24 08:48:56'),(45,16,'html','2023-06-24 08:50:06','2023-06-24 08:50:06'),(46,16,'jquery','2023-06-24 08:50:09','2023-06-24 08:50:09'),(47,16,'javascript','2023-06-24 08:50:12','2023-06-24 08:50:12'),(48,16,'php','2023-06-24 08:50:17','2023-06-24 08:50:17'),(51,17,'react.js','2023-06-24 08:51:32','2023-06-24 08:51:32'),(52,17,'html','2023-06-24 08:51:35','2023-06-24 08:51:35'),(54,17,'bootstrap','2023-06-24 08:51:42','2023-06-24 08:51:42'),(58,19,'tech','2023-07-01 05:56:07','2023-07-01 05:56:07'),(59,19,'ai','2023-07-01 05:56:09','2023-07-01 05:56:09'),(60,19,'public-speaking','2023-07-01 05:56:13','2023-07-01 05:56:13'),(61,19,'volunteering','2023-07-01 05:56:19','2023-07-01 05:56:19'),(62,19,'social','2023-07-01 05:56:21','2023-07-01 05:56:21'),(63,20,'tech','2023-07-01 05:56:34','2023-07-01 05:56:34'),(64,20,'php','2023-07-01 05:56:36','2023-07-01 05:56:36'),(65,20,'twillio','2023-07-01 05:56:39','2023-07-01 05:56:39'),(66,20,'javascript','2023-07-01 05:56:44','2023-07-01 05:56:44'),(67,20,'html','2023-07-01 05:56:46','2023-07-01 05:56:46'),(68,20,'css','2023-07-01 05:56:47','2023-07-01 05:56:47');
/*!40000 ALTER TABLE `project_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `clicks` int NOT NULL DEFAULT '0',
  `status` enum('active','inactive','deleted') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'inactive',
  `link_github` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `home_clicks` int NOT NULL DEFAULT '0',
  `home_link_clicks` int NOT NULL DEFAULT '0',
  `dedicated_page_clicks` int NOT NULL DEFAULT '0',
  `dedicated_page_link_clicks` int NOT NULL DEFAULT '0',
  `project_date` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ordering` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (9,'2023-06-24 07:48:41','2023-07-01 05:46:03','GTABase.com','In August 2020, I became a member of the technical team at GTABase.\r\nThere, I build articles manually or generate them using Python. Since my joining as a member, I\'ve helped build the databases regarding GTA IV, the 3D GTA trilogy and also develop the GTA V database on the website.','project-gtabase.com.png','www.gtabase.com',0,'active',NULL,2,0,0,0,'August 2020',1),(10,'2023-06-24 07:51:20','2023-07-01 05:46:40','CNLR Student Council Website','During the 2021-2022 high school year, I created the student council website for my high school\'s student council. I used the Joomla! Content Management System to build it, using knowledge I had gained from work on GTABase.','project-cnlr-student-council-website.jpg','http://cse.cnlr.ro/',0,'active',NULL,4,1,0,0,'December 2021',2),(11,'2023-06-24 07:57:28','2023-07-01 05:46:40','\"People for People\" Conference','During my time as a volunteer at Interact Bistrița-Nosa, I coordinated two projects created by our club. \"People for People\" was my idea and it implied a conference on drugs, on their effect and on the ways we can help the people close to us that are affected by addiction. It was a success, and I\'m happy that me and my team made it happen.','project-\"people-for-people\"-conference.jpg','https://www.instagram.com/p/ChhyFXytFnG/',0,'active',NULL,2,1,0,0,'August 2022',3),(12,'2023-06-24 08:40:17','2023-07-01 05:46:31','IngroConsult Website','Presentation website built for my father\'s company, S.C. IngroConsult S.R.L.\r\n\r\nBuilt using HTML, jQuery, Bootstrap and PHP, this was my first true web project, and the first presentation website I\'ve built.','project-ingroconsult-website.png','https://www.ingroconsult.ro/',0,'active',NULL,0,0,0,0,'August 2022',4),(13,'2023-06-24 08:42:55','2023-07-01 05:46:31','Interact - Splash 2.0','During my time in Interact, I co-coordonated projects such as this one. Splash 2.0 represents the revival of a fun project for teenagers in the municipal forest of my hometown. Several teams competed in a few contests regarding water balloons.','project-interact---splash-2.0.jpg','https://www.instagram.com/p/Chu2Cuft-I-/',0,'active',NULL,0,0,0,0,'September 2022',5),(14,'2023-06-24 08:44:43','2023-07-01 05:46:32','PartyQ','The PartyQ app allows users to queue up videos and songs using the YouTube API from their phone. All these songs are played in order on a main \"host\" computer or phone.','project-partyq.png','https://www.party.rotak.ro/',0,'active',NULL,0,0,7,0,'October 2022',6),(15,'2023-06-24 08:48:44','2023-07-01 06:00:17','Psychology of Drug Consumption','The \"Psychology of Drug Consumption\" conference was a follow-up of the \"People for People\" conference. This time, it was held in Bucharest and organized in partnership with Rotaract Levant, the volunteering club that I am part of since October 2022.','project-psychology-of-drug-consumption.png','https://www.instagram.com/p/CqTPeDLL5an/',0,'active',NULL,0,0,7,0,'March 2023',9),(16,'2023-06-24 08:50:01','2023-07-01 06:00:17','Template Filler','This web application was built as a tool to assist me in building technical articles from bulk data, which is usually gathered and manipulated in .csv files. Using the app, one can write an html template and fill it in with data from a .csv sheet. Might be updated in the future to feature conditionals and such, but it is not needed for now.','project-template-filler.png','https://www.rotak.ro/projects/template_filler/',0,'active',NULL,0,0,7,0,'March 2023',7),(17,'2023-06-24 08:51:20','2023-07-01 06:00:17','Rentlog','As a member of the Creative Motion team, I\'m building the Rentlog application.\r\nSign the contract, manage payments and utilities, notify your tenants in minutes.','project-rentlog.png','https://www.rentlog.co/',0,'active',NULL,0,0,7,1,'April 2023',8),(19,'2023-07-01 05:45:37','2023-07-01 06:00:17','Speaker at Călărași Education','I was invited to speak at the launch of „Călărași Education”, a platform that uses the ChatGPT API to generate documents on different topics.\r\nI talked about the way that AI is present in our everyday life and how it can help us develop.','project-speaker-at-calarasi-education.jpg','https://www.instagram.com/p/CsEY3DHtz2Q/',0,'active',NULL,0,0,0,0,'May 2023',10),(20,'2023-07-01 05:55:53','2023-07-01 06:00:17','Office Direct','Since May 2023, I work on developing administrator tools for Office Direct. I work with PHP, Javascript and tools such as Twillio.','project-office-direct.jpg','https://www.officedirect.ro/',0,'active',NULL,0,0,0,0,'May 2023',11);
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_messages`
--

DROP TABLE IF EXISTS `user_messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_messages` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `message` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_messages`
--

LOCK TABLES `user_messages` WRITE;
/*!40000 ALTER TABLE `user_messages` DISABLE KEYS */;
INSERT INTO `user_messages` VALUES (1,'2023-06-25 09:34:03','2023-06-25 09:34:03','duten plm prostule','robert takacs','robert.takacs.503@gmail.com');
/*!40000 ALTER TABLE `user_messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Takacs Robert','robert.takacs.503@gmail.com',NULL,'$2y$10$O1xxm/cZUxAqtoo549Ns3.D8seTZ8USrVwoJkAYoQ4PNmrJxoOV7e',NULL,'2023-07-01 05:40:26','2023-07-01 05:40:26');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-01 12:01:30
