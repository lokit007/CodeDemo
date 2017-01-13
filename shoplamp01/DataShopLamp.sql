-- MySQL dump 10.13  Distrib 5.6.24, for Win32 (x86)
--
-- Host: 127.0.0.1    Database: shoplampdb
-- ------------------------------------------------------
-- Server version	5.6.26-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bill`
--

DROP TABLE IF EXISTS `bill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bill` (
  `IdBill` int(11) NOT NULL AUTO_INCREMENT,
  `UserBuy` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `DateCreate` varchar(20) CHARACTER SET utf8 NOT NULL,
  `PhoneNumber` varchar(20) CHARACTER SET utf8 NOT NULL,
  `Address` varchar(500) CHARACTER SET utf8 NOT NULL,
  `Sale` int(11) DEFAULT NULL,
  `Tax` float NOT NULL,
  `TotalPrice` int(11) NOT NULL,
  `Note` text COLLATE utf8_unicode_ci,
  `State` int(11) NOT NULL,
  PRIMARY KEY (`IdBill`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Hoa don ban hang';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bill`
--

LOCK TABLES `bill` WRITE;
/*!40000 ALTER TABLE `bill` DISABLE KEYS */;
/*!40000 ALTER TABLE `bill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `IdCategory` int(11) NOT NULL,
  `Name` varchar(100) CHARACTER SET utf8 NOT NULL,
  `Depiction` text COLLATE utf8_unicode_ci,
  `DateCreate` varchar(20) CHARACTER SET utf8 NOT NULL,
  `Show` int(11) NOT NULL,
  PRIMARY KEY (`IdCategory`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Danh muc cac loai';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chatroom`
--

DROP TABLE IF EXISTS `chatroom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chatroom` (
  `IdMessage` int(11) NOT NULL AUTO_INCREMENT,
  `Sender` varchar(50) CHARACTER SET utf8 NOT NULL,
  `Receiver` varchar(50) CHARACTER SET utf8 NOT NULL,
  `Message` text COLLATE utf8_unicode_ci NOT NULL,
  `Time` varchar(30) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`IdMessage`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Lien lac giua user va quan tri vien';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chatroom`
--

LOCK TABLES `chatroom` WRITE;
/*!40000 ALTER TABLE `chatroom` DISABLE KEYS */;
/*!40000 ALTER TABLE `chatroom` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detailbill`
--

DROP TABLE IF EXISTS `detailbill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `detailbill` (
  `IdDetail` int(11) NOT NULL AUTO_INCREMENT,
  `Bill` int(11) NOT NULL,
  `Product` int(11) NOT NULL,
  `Number` int(11) NOT NULL,
  `Price` int(11) NOT NULL,
  PRIMARY KEY (`IdDetail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Chi tiet don hang';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detailbill`
--

LOCK TABLES `detailbill` WRITE;
/*!40000 ALTER TABLE `detailbill` DISABLE KEYS */;
/*!40000 ALTER TABLE `detailbill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalsupply`
--

DROP TABLE IF EXISTS `detalsupply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `detalsupply` (
  `Supply` int(11) NOT NULL,
  `Product` int(11) NOT NULL,
  `Number` int(11) NOT NULL,
  `Price` int(11) NOT NULL,
  PRIMARY KEY (`Supply`,`Product`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Chi tiet nhap hang';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalsupply`
--

LOCK TABLES `detalsupply` WRITE;
/*!40000 ALTER TABLE `detalsupply` DISABLE KEYS */;
/*!40000 ALTER TABLE `detalsupply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emailregister`
--

DROP TABLE IF EXISTS `emailregister`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `emailregister` (
  `Email` varchar(50) CHARACTER SET utf8 NOT NULL,
  `Category` int(11) NOT NULL,
  `State` int(11) NOT NULL,
  `DateRegister` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`Email`),
  UNIQUE KEY `Email_UNIQUE` (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Email dang ky nhan thong tin tu he thong';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emailregister`
--

LOCK TABLES `emailregister` WRITE;
/*!40000 ALTER TABLE `emailregister` DISABLE KEYS */;
/*!40000 ALTER TABLE `emailregister` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `log`
--

DROP TABLE IF EXISTS `log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `log` (
  `IdLog` int(11) NOT NULL AUTO_INCREMENT,
  `TableName` varchar(20) CHARACTER SET utf8 NOT NULL,
  `SqlQuery` text COLLATE utf8_unicode_ci NOT NULL,
  `DateCreateLog` varchar(20) CHARACTER SET utf8 NOT NULL,
  `Notes` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`IdLog`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Luu vet cac thao tac cap nhat lien quan den csdl';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log`
--

LOCK TABLES `log` WRITE;
/*!40000 ALTER TABLE `log` DISABLE KEYS */;
/*!40000 ALTER TABLE `log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partner`
--

DROP TABLE IF EXISTS `partner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `partner` (
  `IdPartner` int(11) NOT NULL AUTO_INCREMENT,
  `NameCompany` varchar(500) CHARACTER SET utf8 DEFAULT NULL,
  `NameDelegate` varchar(500) CHARACTER SET utf8 NOT NULL,
  `Address` varchar(500) CHARACTER SET utf8 NOT NULL,
  `PhoneNumber` varchar(20) CHARACTER SET utf8 NOT NULL,
  `Email` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `IdCard` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `DateCreate` varchar(20) CHARACTER SET utf8 NOT NULL,
  `Note` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`IdPartner`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Doi tac la cac nha cung cap, cung ung cac san pham cho cua hang';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partner`
--

LOCK TABLES `partner` WRITE;
/*!40000 ALTER TABLE `partner` DISABLE KEYS */;
/*!40000 ALTER TABLE `partner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `IdProduct` int(11) NOT NULL AUTO_INCREMENT,
  `Category` int(11) NOT NULL,
  `Name` varchar(500) CHARACTER SET utf8 NOT NULL,
  `Depiction` text COLLATE utf8_unicode_ci,
  `Number` int(11) NOT NULL,
  `Price` int(11) NOT NULL,
  `DateChange` varchar(20) CHARACTER SET utf8 NOT NULL,
  `State` int(11) NOT NULL,
  `Images` varchar(500) CHARACTER SET utf8 DEFAULT NULL COMMENT 'Danh sach hinh anh mo ta',
  PRIMARY KEY (`IdProduct`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='San pham';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promotion`
--

DROP TABLE IF EXISTS `promotion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `promotion` (
  `IdPromotion` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(500) CHARACTER SET utf8 NOT NULL,
  `Depiction` text COLLATE utf8_unicode_ci NOT NULL,
  `Type` int(11) NOT NULL,
  `DateStart` varchar(20) CHARACTER SET utf8 NOT NULL,
  `DateEnd` varchar(20) CHARACTER SET utf8 NOT NULL,
  `State` int(11) NOT NULL,
  PRIMARY KEY (`IdPromotion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Khuyen mai';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotion`
--

LOCK TABLES `promotion` WRITE;
/*!40000 ALTER TABLE `promotion` DISABLE KEYS */;
/*!40000 ALTER TABLE `promotion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `salebill`
--

DROP TABLE IF EXISTS `salebill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `salebill` (
  `Promotion` int(11) NOT NULL,
  `MinBill` int(11) DEFAULT NULL,
  `MaxBill` int(11) DEFAULT NULL,
  `Percent` int(11) DEFAULT NULL,
  `Number` int(11) DEFAULT NULL,
  PRIMARY KEY (`Promotion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Khuyen mai cho tong hoa don';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salebill`
--

LOCK TABLES `salebill` WRITE;
/*!40000 ALTER TABLE `salebill` DISABLE KEYS */;
/*!40000 ALTER TABLE `salebill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saleproduct`
--

DROP TABLE IF EXISTS `saleproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `saleproduct` (
  `Promotion` int(11) NOT NULL,
  `Product` int(11) DEFAULT NULL,
  `Percent` int(11) DEFAULT NULL,
  `Number` int(11) DEFAULT NULL,
  PRIMARY KEY (`Promotion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='khuyen mai tren san pham';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saleproduct`
--

LOCK TABLES `saleproduct` WRITE;
/*!40000 ALTER TABLE `saleproduct` DISABLE KEYS */;
/*!40000 ALTER TABLE `saleproduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supply`
--

DROP TABLE IF EXISTS `supply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `supply` (
  `IdSupply` int(11) NOT NULL AUTO_INCREMENT,
  `Partner` int(11) NOT NULL,
  `TotalPrice` int(11) NOT NULL,
  `Tax` int(11) NOT NULL,
  `DateCreate` varchar(20) CHARACTER SET utf8 NOT NULL,
  `State` int(11) NOT NULL,
  PRIMARY KEY (`IdSupply`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Danh sach cac san pham ma nha cung cap cung ung';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supply`
--

LOCK TABLES `supply` WRITE;
/*!40000 ALTER TABLE `supply` DISABLE KEYS */;
/*!40000 ALTER TABLE `supply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `IdUser` int(11) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(30) CHARACTER SET utf8 NOT NULL,
  `PassWord` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `LongName` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `Address` varchar(300) CHARACTER SET utf8 DEFAULT NULL,
  `PhoneNumber` varchar(15) CHARACTER SET utf8 DEFAULT NULL,
  `Email` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `LogoImage` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `DateCreate` varchar(30) CHARACTER SET utf8 NOT NULL,
  `Level` int(11) NOT NULL,
  `State` int(11) NOT NULL,
  PRIMARY KEY (`IdUser`,`UserName`),
  UNIQUE KEY `UserName_UNIQUE` (`UserName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Tai khoan nguoi dung';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vipmenber`
--

DROP TABLE IF EXISTS `vipmenber`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vipmenber` (
  `User` varchar(50) CHARACTER SET utf8 NOT NULL,
  `Point` int(11) NOT NULL,
  `Identity` varchar(20) CHARACTER SET utf8 NOT NULL,
  `level` int(11) NOT NULL,
  `IdCard` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`User`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Thanh vien tich cuc cua he thong';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vipmenber`
--

LOCK TABLES `vipmenber` WRITE;
/*!40000 ALTER TABLE `vipmenber` DISABLE KEYS */;
/*!40000 ALTER TABLE `vipmenber` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-01-12 23:59:33
