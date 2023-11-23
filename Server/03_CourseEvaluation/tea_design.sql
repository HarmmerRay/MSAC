/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50620
Source Host           : localhost:3306
Source Database       : tea_design

Target Server Type    : MYSQL
Target Server Version : 50620
File Encoding         : 65001

Date: 2023-5-12 17:26:29
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `userPw` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=armscii8;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('8', 'admin', 'admin');

-- ----------------------------
-- Table structure for course
-- ----------------------------
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `course_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `course_score` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=armscii8;

-- ----------------------------
-- Records of course
-- ----------------------------
INSERT INTO `course` VALUES ('1', '大学英语', '3');
INSERT INTO `course` VALUES ('2', '大学语文', '3');

-- ----------------------------
-- Table structure for course_tea
-- ----------------------------
DROP TABLE IF EXISTS `course_tea`;
CREATE TABLE `course_tea` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `course_id` int(10) DEFAULT NULL,
  `teacher_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=armscii8;

-- ----------------------------
-- Records of course_tea
-- ----------------------------
INSERT INTO `course_tea` VALUES ('3', '1', '3');
INSERT INTO `course_tea` VALUES ('4', '2', '3');
INSERT INTO `course_tea` VALUES ('5', '2', '4');
INSERT INTO `course_tea` VALUES ('9', '2', '2');
INSERT INTO `course_tea` VALUES ('10', '1', '1');

-- ----------------------------
-- Table structure for fenshu
-- ----------------------------
DROP TABLE IF EXISTS `fenshu`;
CREATE TABLE `fenshu` (
  `fenshu_id` int(11) NOT NULL AUTO_INCREMENT,
  `fenshu_fenshu` double DEFAULT NULL,
  `fenshu_erjizhibiao_id` int(11) DEFAULT NULL,
  `fenshu_teaId` int(11) DEFAULT NULL,
  `fenshu_stuId` int(11) DEFAULT NULL,
  `shijian` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`fenshu_id`)
) ENGINE=InnoDB DEFAULT CHARSET=armscii8;

-- ----------------------------
-- Records of fenshu
-- ----------------------------

-- ----------------------------
-- Table structure for indextable
-- ----------------------------
DROP TABLE IF EXISTS `indextable`;
CREATE TABLE `indextable` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `indexName` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `weight` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `parent_id` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `index_num` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=armscii8;

-- ----------------------------
-- Records of indextable
-- ----------------------------
INSERT INTO `indextable` VALUES ('14', '师德表现', '0.2', null, null);
INSERT INTO `indextable` VALUES ('15', '教育科研', '0.2', null, null);
INSERT INTO `indextable` VALUES ('16', '课堂教学', '0.2', null, null);
INSERT INTO `indextable` VALUES ('17', '学生管理', '0.2', null, null);
INSERT INTO `indextable` VALUES ('18', '任课情况', '0.2', null, null);
INSERT INTO `indextable` VALUES ('19', '自觉履行师德公约，平等对待学生', '0.2', '', null);
INSERT INTO `indextable` VALUES ('20', '积极参加教研活动，有教研课题，且实施好', '0.2', '15', null);
INSERT INTO `indextable` VALUES ('21', '在课堂中，民主和谐的气氛很浓，学生学习的积极性很高', '0.2', '16', null);
INSERT INTO `indextable` VALUES ('22', '课堂管理教学有方，深受学生喜爱', '0.2', '17', null);
INSERT INTO `indextable` VALUES ('23', '按规定完成任课数量，特殊情况及时说明', '0.2', '', null);

-- ----------------------------
-- Table structure for pingjiaxinxi
-- ----------------------------
DROP TABLE IF EXISTS `pingjiaxinxi`;
CREATE TABLE `pingjiaxinxi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tea_id` int(11) DEFAULT NULL,
  `stu_id` int(11) DEFAULT NULL,
  `zongfen` int(11) DEFAULT NULL,
  `shijian` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=armscii8;

-- ----------------------------
-- Records of pingjiaxinxi
-- ----------------------------
INSERT INTO `pingjiaxinxi` VALUES ('11', '1', '1', '100', '2022-10-02 02:48:08');
INSERT INTO `pingjiaxinxi` VALUES ('14', '2', '1', '94', '2022-10-02 03:16:09');

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `stu_id` int(11) NOT NULL AUTO_INCREMENT,
  `stu_xuehao` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `stu_realname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `stu_sex` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `stu_age` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `stu_card` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `stu_zhengzhimianmao` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `login_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `login_pw` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `del` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`stu_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=armscii8;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES ('1', '330001', '张国亮', '1', '20', '3300011', '1', '3300011', '123456', null);
INSERT INTO `student` VALUES ('2', '330002', '何玲', '0', '20', '3300022', '0', '3300022', '123456', null);

-- ----------------------------
-- Table structure for teacher
-- ----------------------------
DROP TABLE IF EXISTS `teacher`;
CREATE TABLE `teacher` (
  `tea_id` int(11) NOT NULL AUTO_INCREMENT,
  `tea_bianhao` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `tea_realname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `tea_sex` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `tea_age` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `login_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `login_pw` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `del` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`tea_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=armscii8;

-- ----------------------------
-- Records of teacher
-- ----------------------------
INSERT INTO `teacher` VALUES ('1', '0001', '张晓峰', '1', '35', '张晓峰', '123456', null);
INSERT INTO `teacher` VALUES ('2', '0002', '孙珺', '0', '28', '孙珺', '123456', null);
