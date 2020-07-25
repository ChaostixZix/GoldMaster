-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 25 Jul 2020 pada 14.49
-- Versi server: 10.2.32-MariaDB-log-cll-lve
-- Versi PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `goldmast_olshop`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `t_admin`
--

CREATE TABLE `t_admin` (
  `id_admin` tinyint(2) NOT NULL,
  `username` varchar(35) NOT NULL,
  `fullname` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `level` tinyint(1) NOT NULL,
  `email` varchar(100) NOT NULL,
  `reset` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `t_admin`
--

INSERT INTO `t_admin` (`id_admin`, `username`, `fullname`, `password`, `level`, `email`, `reset`) VALUES
(1, 'admin', 'Administrator', '$2y$10$h.2rmSj059VCc3hNjvnbzOgTVprnmjgP1I9M570.RERGRkU1KbFBq', 1, 'email@example', ''),
(2, 'pirmantersakiti', 'SUPIRMAN', '$2y$10$wKQShFvvXGw/Ng9ZcOZXN.cEHHbObtKT1vud94YR5Lk4VjHGYLLAO', 2, 'pirmantersakiti@gmail.com', ''),
(3, 'fakhri', 'fakhri', 'fakhri', 3, 'sucyresky@gmail.com', ''),
(4, 'testing123', 'testing123', '$2y$10$MBLeFxUUfAM8yDy.ilkKl.fD/8LpNemecwZSDlw7ZFTczgjWbxOXq', 1, 'testing123@gmail.com', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `t_items`
--

CREATE TABLE `t_items` (
  `id_items` int(7) NOT NULL,
  `id_kategori` int(11) NOT NULL,
  `id_item` int(11) NOT NULL,
  `harga` int(50) NOT NULL,
  `dollar` varchar(50) NOT NULL,
  `stok` int(50) NOT NULL,
  `n_karakter` varchar(255) NOT NULL,
  `pengiriman` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `t_items`
--

INSERT INTO `t_items` (`id_items`, `id_kategori`, `id_item`, `harga`, `dollar`, `stok`, `n_karakter`, `pengiriman`) VALUES
(2, 19, 87, 111, '0.011111', 123, 'zingzong', 'Face to face'),
(3, 19, 88, 700, '0.055', 700, 'deserves', 'Mail'),
(7, 19, 301, 1, '1', 1, 'gentong', 'Face to face'),
(114, 19, 389, 363, '0', 2270, 'HUBUNGI ADMIN', 'Mail'),
(115, 26, 394, 77, '0', 999999, 'HUBUNGI ADMIN', 'F8 Cross-server Dungeon');

-- --------------------------------------------------------

--
-- Struktur dari tabel `t_kategori`
--

CREATE TABLE `t_kategori` (
  `id_kategori` smallint(6) NOT NULL,
  `kategori` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `t_kategori`
--

INSERT INTO `t_kategori` (`id_kategori`, `kategori`) VALUES
(19, 'World of Warcraft Classic - US'),
(25, 'World of Warcraft Classic - EU'),
(26, 'Blade & Soul - NA');

-- --------------------------------------------------------

--
-- Struktur dari tabel `t_order`
--

CREATE TABLE `t_order` (
  `id_order` varchar(10) NOT NULL,
  `id_user` int(7) NOT NULL,
  `id_item` int(11) NOT NULL,
  `id_kategori` int(11) NOT NULL,
  `id_stock` int(11) NOT NULL,
  `harga` double NOT NULL,
  `dollar` double NOT NULL,
  `game` varchar(255) NOT NULL,
  `server` varchar(255) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `m_pengirim` varchar(255) NOT NULL,
  `stok` double NOT NULL,
  `tgl_pesan` date NOT NULL,
  `bts_bayar` date NOT NULL,
  `status_o` enum('pending','aktif') NOT NULL,
  `file` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `t_pengiriman`
--

CREATE TABLE `t_pengiriman` (
  `id_pengiriman` int(11) NOT NULL,
  `pengiriman` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `t_pengiriman`
--

INSERT INTO `t_pengiriman` (`id_pengiriman`, `pengiriman`) VALUES
(2, 'Face to face'),
(3, 'Mail'),
(5, 'Auction House'),
(7, 'F8 Cross-server Dungeon');

-- --------------------------------------------------------

--
-- Struktur dari tabel `t_server`
--

CREATE TABLE `t_server` (
  `id_item` int(11) NOT NULL,
  `server` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `t_server`
--

INSERT INTO `t_server` (`id_item`, `server`) VALUES
(390, 'Windseeker/Alliance'),
(389, 'Whitemane/Horde'),
(388, 'Whitemine/Alliance'),
(387, 'Westfall/Horde'),
(386, 'Westfall/Alliance'),
(385, 'Thunderfury/Horde'),
(384, 'Thunderfury/Alliance'),
(383, 'Thalnos/Horde'),
(382, 'Thalnos/Alliance'),
(381, 'Sulfuras/Horde'),
(380, 'Sulfuras/Alliance'),
(379, 'Sul\'thraze/Horde'),
(378, 'Sul\'thraze/Alliance'),
(377, 'Stalagg/Horde'),
(376, 'Stalagg/Alliance'),
(375, 'Smolderweb/Horde'),
(374, 'Smolderweb/Alliance'),
(373, 'Skeram/Horde'),
(372, 'Skeram/Alliance'),
(371, 'Remulos/Horde'),
(370, 'Remulos/Alliance'),
(369, 'Rattlegore/Horde'),
(368, 'Rattlegore/Alliance'),
(367, 'Pagle/Horde'),
(366, 'Pagle/Alliance'),
(365, 'Old Blanchy/Horde'),
(364, 'Old Blanchy/Alliance'),
(363, 'Netherwind/Horde'),
(362, 'Netherwind/Alliance'),
(361, 'Myzrael/Horde'),
(360, 'Myzrael/Alliance'),
(359, 'Mankrik/Horde'),
(358, 'Mankrik/Alliance'),
(357, 'Loatheb/Horde'),
(356, 'Loatheb/Alliance'),
(355, 'Kurinnaxx/Horde'),
(354, 'Kurinnaxx/Alliance'),
(353, 'Kromcrush/Horde'),
(352, 'Kromcrush/Alliance'),
(351, 'Kirtonos/Horde'),
(350, 'Kirtonos/Alliance'),
(349, 'Incendius/Horde'),
(348, 'Incendius/Alliance'),
(347, 'Herod/Horde'),
(346, 'Herod/Alliance'),
(345, 'Heartseeker/Horde'),
(344, 'Heartseeker/Alliance'),
(343, 'Grobbulus/Horde'),
(342, 'Grobbulus/Alliance'),
(341, 'Felstriker/Horde'),
(340, 'Felstriker/Alliance'),
(339, 'Fairbanks/Horde'),
(338, 'Fairbanks/Alliance'),
(337, 'Faerlina/Horde'),
(336, 'Faerlina/Alliance'),
(335, 'Earthfury/Horde'),
(334, 'Earthfury/Alliance'),
(333, 'Earthfury/Alliance'),
(332, 'Deviate Delight/Horde'),
(331, 'Deviate Delight/Alliance'),
(330, 'Bloodsail Buccaneers/Horde'),
(329, 'Bloodsail Buccaneers/Alliance'),
(328, 'Blaumeux/Horde'),
(327, 'Blaumeux/Alliance'),
(326, 'Bigglesworth/Horde'),
(325, 'Bigglesworth/Alliance'),
(324, 'Benediction/Horde'),
(323, 'Benediction/Alliance'),
(322, 'Azuresong/Horde'),
(321, 'Azuresong/Alliance'),
(320, 'Atiesh/Horde'),
(319, 'Atiesh/Alliance'),
(318, 'Ashkandi/Horde'),
(317, 'Ashkandi/Alliance'),
(316, 'Arugal/Horde'),
(315, 'Arugal/Alliance'),
(314, 'Arcanite Reaper/Horde'),
(313, 'Arcanite Reaper/Alliance'),
(312, 'Anathema/Horde'),
(311, 'Anathema/Alliance'),
(391, 'Windseeker/Horde'),
(392, 'Yojamba/Alliance'),
(393, 'Yojamba/Horde'),
(394, 'Yura');

-- --------------------------------------------------------

--
-- Struktur dari tabel `t_stok`
--

CREATE TABLE `t_stok` (
  `id_stock` int(11) NOT NULL,
  `id_item` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_kategori` smallint(6) NOT NULL,
  `stock` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `t_stok`
--

INSERT INTO `t_stok` (`id_stock`, `id_item`, `id_user`, `id_kategori`, `stock`) VALUES
(23, 91, 19, 19, 6999),
(27, 95, 18, 19, 6000),
(31, 392, 27, 19, 1000),
(33, 0, 28, 0, 0),
(36, 355, 31, 19, 1150),
(37, 0, 30, 0, 0),
(38, 374, 30, 19, 650),
(41, 335, 36, 19, 1000),
(46, 337, 53, 19, 1200),
(47, 0, 56, 26, 1),
(49, 336, 57, 19, 1800),
(51, 0, 59, 0, 0),
(54, 0, 32, 19, 0),
(56, 0, 61, 0, 0),
(58, 0, 54, 0, 0),
(60, 362, 63, 19, 1200),
(63, 0, 33, 0, 0),
(65, 0, 68, 0, 0),
(67, 0, 69, 0, 0),
(69, 381, 70, 19, 0),
(71, 315, 72, 19, 2000),
(73, 377, 40, 19, 200),
(74, 360, 74, 19, 520),
(75, 386, 75, 19, 2000),
(76, 0, 27, 0, 0),
(77, 393, 27, 19, 2500),
(79, 355, 48, 19, 1000),
(80, 0, 101, 0, 0),
(82, 371, 33, 19, 850),
(84, 363, 105, 19, 500),
(85, 0, 107, 19, 0),
(86, 0, 99, 0, 0),
(90, 393, 112, 0, 0),
(94, 393, 114, 0, 1000),
(95, 0, 105, 0, 0),
(101, 0, 47, 0, 0),
(105, 393, 118, 19, 400),
(106, 393, 109, 19, 1250),
(107, 0, 121, 0, 0),
(110, 388, 123, 19, 2000),
(111, 0, 122, 0, 0),
(113, 360, 126, 19, 1000),
(121, 377, 115, 19, 1000),
(122, 375, 133, 19, 1000),
(123, 0, 133, 0, 0),
(125, 336, 135, 19, 1000),
(126, 327, 136, 0, 2600),
(127, 348, 137, 19, 2000),
(134, 362, 147, 19, 1600),
(135, 0, 148, 19, 0),
(136, 316, 149, 19, 1000),
(137, 326, 144, 19, 1300),
(138, 359, 151, 19, 2000),
(139, 392, 152, 19, 2000),
(142, 0, 140, 0, 0),
(143, 388, 140, 19, 1200),
(144, 0, 154, 19, 0),
(145, 377, 154, 19, 10000),
(146, 0, 154, 0, 1000),
(147, 386, 99, 19, 1200),
(148, 361, 99, 19, 450),
(149, 388, 47, 19, 1200),
(150, 0, 155, 0, 0),
(153, 0, 157, 0, 0),
(155, 364, 157, 19, 500),
(156, 346, 150, 19, 600),
(157, 334, 158, 19, 500),
(158, 388, 153, 19, 500),
(160, 316, 160, 0, 500),
(161, 360, 99, 19, 1500),
(162, 362, 163, 19, 342),
(165, 0, 164, 0, 0),
(166, 375, 164, 19, 2000),
(169, 0, 167, 0, 0),
(170, 0, 168, 0, 0),
(173, 384, 171, 19, 1200),
(175, 393, 174, 19, 3000),
(176, 0, 175, 0, 0),
(178, 339, 121, 19, 2500),
(181, 339, 178, 19, 500),
(182, 0, 181, 0, 0),
(183, 0, 182, 0, 0),
(184, 336, 182, 19, 3300);

-- --------------------------------------------------------

--
-- Struktur dari tabel `t_users`
--

CREATE TABLE `t_users` (
  `id_user` int(7) NOT NULL,
  `username` varchar(35) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `negara` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `telp` varchar(20) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `n_bank` varchar(100) NOT NULL,
  `a_nama` varchar(255) NOT NULL,
  `n_rekening` varchar(255) NOT NULL,
  `v_bank` varchar(100) NOT NULL,
  `n_e` varchar(255) NOT NULL,
  `reset` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `t_users`
--

INSERT INTO `t_users` (`id_user`, `username`, `fullname`, `negara`, `email`, `password`, `telp`, `status`, `n_bank`, `a_nama`, `n_rekening`, `v_bank`, `n_e`, `reset`) VALUES
(12, 'Alifian', 'Ali Fian', '', 'alifian903@gmail.com', '$2y$10$j1073R3.arIO8JkdEX31VuH7GrWbr5TFbCHH31AeT4qn.8E773y6y', '082356665421', 2, '', '', '', '', '', ''),
(13, 'admin', 'admin admin', 'Antarctica', 'sucyresky@gmail.com', '$2y$10$LKqVmiH2Id7WPnRFvR6f4O8woAjF9sYt1Pt/1jn43veHoaXQcu.ou', '081330355613', 1, 'BNI', 'huhiuhjgy', '45454654514218', '-Pilih Virtual Bank-', '', ''),
(14, 'Fadli', 'fadli agus sofian', '', 'fadligallagher1@gmail.com', '$2y$10$vHGVUY5v5IJwT6Se49IiNuJgrgFQzjJawPVlPGpaEMysoM.WKYa7e', '081573018758', 1, '', '', '', '', '', ''),
(15, 'iwanvpn', 'iwane omahe', '', 'ryudosi@gmail.com', '$2y$10$E3hG.rCQRs1WKV/CBRdMTOM/Y3jXqfnq33yBIXfX5Bw7tQTyyaHeK', '082244167226', 1, '', '', '', '', '', ''),
(17, 'basri', 'basri S.Kom', '', '12basry.tutar@gmail.com', '$2y$10$FGkiUwKjyD5Slq25IfYiw.Vvcg3xG.CHjCNVdPCJxr5pQWpEZ./Jm', '085397828095', 1, '', '', '', '', '', ''),
(18, 'ardi', 'ardi ardi', 'Indonesia', 'ardi123@gmail.com', '$2y$10$x.aLjErS0A5Co2Y8kr773Ow1p/0OKw6UuRzX7OTxt5sXiaYkRInoK', '0987654334', 1, 'BRI', 'hghzrhahe', '9876545', 'PAYPAL', 'hjvgcfddghf', ''),
(19, 'syry', 'syry syry', '', 'syry@gmail.com', '$2y$10$lPMpFKHNTbFGOt4HGs8MzuxEYCK71PQWS3DI7fEmlbN1tQrKjyZv6', '', 1, '', '', '', '', '', ''),
(22, 'reski', 'reski inri', 'Indonesia', 'inri@handayani.ac.id', '$2y$10$ftFyLo1My8WbStXNv1KbtO8PmJpL1VCSucWeunESTgvNVUMHAioi6', '085397828095', 1, '', '', '', '', '', ''),
(23, 'danz211', 'dadan andrian', 'Indonesia', 'dadanandrian57@gmail.com', '$2y$10$xF9j.SK5KnHhz8Mb4zpU2OGwmHCN.E72XmlcceEqpibXq3NY2URp2', '089684204403', 1, '', '', '', '', '', ''),
(25, 'rafael', 'ferdo edo', 'Indonesia', 'rafael.ferdo@gmail.com', '$2y$10$5k8i.tzLkq6MS3EhvlJs6uOkt0JZHcbpiHc1ejf5KzfftwVYcgWXK', '08155908861', 1, '', '', '', '', '', ''),
(26, 'bearmtg', 'Bear Lee', 'Indonesia', 'lee.hauhau@yahoo.com', '$2y$10$kkOR2f0ydMqt4b5pc6m85OhTOrBJ/HyN0jgmUI2A314bqmz6JuXPm', '081383612889', 1, '', '', '', '', '', ''),
(27, 'sleepingers', 'Sleep Well', 'Indonesia', 'threegphd@gmail.com', '$2y$10$3Y3VKP.PoYdcmgptoiMTc.h67l/c2GGuXNFsYLGlESR5K.fo35zSq', '082123628215', 1, 'BCA', 'Lanny', '6042051108', '-Pilih Virtual Bank-', 'renaldi.saputra31@gmail.com', ''),
(28, 'Yollo', 'Reza Febrian', 'Indonesia', 'reza.febrian.2906@gmail.com', '$2y$10$HcrGFCLpltYlSACKTIqlcu.3DoXPsNqQVgtLEecBAOaq4fGPDRstS', '081211652695', 1, '', '', '', '', '', ''),
(29, 'vulkanrt', 'Hilman Kudus', 'Indonesia', 'hilmankudus@gmail.com', '$2y$10$fKr2lLjCzj2oi/X/kLRpIe/1lRoCVKicI1o/FHjqndLjWzpdGIBt.', '085314451980', 1, '', '', '', '', '', ''),
(30, 'Afitra015', 'Ardika FM', 'Indonesia', 'ardikafitra15@gmail.com', '$2y$10$IWE0ErGvxEmWE4MCdQ1ivO936yxrTeVFGDZRuhjjq.FY9mCadZVxy', '087816333471', 1, '', '', '', '', '', ''),
(31, 'LunaOkto', 'Luna Okto', '-Pilih Negara-', 'luna.okto80@gmail.com', '$2y$10$p4/MQiVijJn/0ZSDB99kiuRc9W78mroWktv8chS8z1cMBSXCJjPvy', '081224875087', 1, '', '', '', '', '', ''),
(32, 'ranggaa31', 'rangga nugraha', 'Indonesia', 'ranggaciters@gmail.com', '$2y$10$BZ3SyVzxUQ7.vLMiU89aGONy6ZOZV/R/6EhNttEOxLt1cifLzjRU6', '088291495480', 1, '', '', '', '', '', ''),
(33, 'aprisal', 'aprisal isal', 'Indonesia', 'isal18@gmail.com', '$2y$10$WII1l4T7eWLsTRPvWK1oIOWJBuhQMenAfr3bTQJnSDo9y20Icu4hK', '08987033087', 1, '', '', '', '', '', ''),
(34, 'teddy', 'tedi sutaryo', 'Indonesia', 'teddykomunika@yahoo.com', '$2y$10$YrknkxTXhNPgC1mgz1tzHeXTtkevx0tOedaJ2E3r8y1ENprQUHQpW', '081224742846', 1, '', '', '', '', '', ''),
(35, 'fanzelbenz', 'fanzel benz', '-Pilih Negara-', 'yeharalagi@gmail.com', '$2y$10$lMf7MZpTDt08hKt4PFqSNOhU6O5iCaL5afPkFsY4tSTWmqTn832hm', '089627030801', 1, '', '', '', '', '', ''),
(36, 'IwinSekiro', 'Iwin Sekiro', 'Indonesia', 'qfbhaghq@gmail.com', '$2y$10$U2MQY7MR1.CeDLVK5fWQfO/7Xy4e.bfUJ1eXcWMujI/ig1aXvhF3S', '082127743973', 1, '', '', '', '', '', ''),
(37, 'Keboxxx', 'Allan Gustiardi', 'Indonesia', 'allangustiardi@gmail.com', '$2y$10$gl3QakjaEzx0H/clqb2zXu/EjvIPo5H/CJ79w7GT7hYx.qCAdPnyq', '0881023056850', 1, '', '', '', '', '', ''),
(38, 'Kondol', 'Aldi Nurdiansyah', 'Indonesia', 'dhard249@gmail.com', '$2y$10$1yFszprDP.qyMgDnilmH6uDpWRUo8O7qHekgwmd3hq61H80w7RZVu', '085861306183', 1, '', '', '', '', '', ''),
(39, 'mvermana', 'maman fermana', 'Indonesia', 'manpermana101@gmail.com', '$2y$10$0qiE.mQFThBrHLfioUL9UOPH7aPwLNbRfAGrgjGwGY44ETU6.dF0K', '081224599136', 1, 'BRI', 'maman fermana', '429501012496537', 'PAYPAL', 'manpermana101@gmail.com', ''),
(40, 'yans070103', 'Yana Nurdiana', 'Indonesia', 'yans070103@yahoo.com', '$2y$10$yEAW.5XIVKnVOVO4jHHPt.L9CvYwjipfftoSIUNAFGJEFlFtdzNHW', '089633472269', 1, 'BCA', 'Yana Nurdiana', '4370767543', '-Pilih Virtual Bank-', '', ''),
(41, 'giwakira', 'giw akira', '-Pilih Negara-', 'akira.giw@gmail.com', '$2y$10$KNIn5U3tigz20GD82ZKLJuCafwGhQ//.doUGDKR.GOh9TZQXJTh9S', '85797000970', 1, '', '', '', '', '', ''),
(42, 'kacong123', 'aditya johari', 'Indonesia', 'adityajohari18@gmail.com', '$2y$10$MKkFhM9/RWBAepVYnMZKcuvU8GiiSjwcDBpl9Tro9YfTAuePbsNIi', '081390940457', 1, '', '', '', '', '', ''),
(43, 'BanterFh', 'Hadi Kartono', 'Indonesia', 'banter509509@gmail.com', '$2y$10$NUcSNSByuubDe2H/0jI9meaRXVHMvXUCIHIpOzh2zTozduzWF3oSC', '085215141756', 1, '', '', '', '', '', ''),
(44, 'afrizalns', 'anonym ous', '-Pilih Negara-', 'afrizaljenong@gmail.com', '$2y$10$hM7qQG8hnSxvA5RCQX4frusnbfty/GQHHetAJUFjDgT7K1UnThRpq', '089671556270', 1, '', '', '', '', '', ''),
(45, 'Krisman', 'Krisman Krisyantoro', 'Indonesia', 'krismankrs@gmail.com', '$2y$10$hvwg/bKBrbTLAsoidFgwUudwG.uZ2uXxpufLviAzqfM4eKcs1XflG', '089655771496', 1, '', '', '', '', '', ''),
(46, 'khii991', 'yahya febri', '-Pilih Negara-', 'febryans56@gmail.com', '$2y$10$GLCxxGDIqQd2zE2Awa17QutyXyY2.3AwgbOaqGEouLSbMffYRQ/1q', '082115662805', 1, '', '', '', '', '', ''),
(47, 'favelapunk', 'daniel suryanata', 'Indonesia', 'danieleriko007@gmail.com', '$2y$10$zZIGt8EY2q5DLBsITWhz5.mH9i/XY9M6/.zDH7kojdEi4VYM5RW/q', '089681390797', 1, '', '', '', '', '', ''),
(48, 'Glowy', 'Heri Rustandi', 'Indonesia', 'glowy.2409@gmail.com', '$2y$10$K5j6BT7ihCEpQrSEiXSaBO9eCPXTB715hz3S4zJtQElWgCD6KottK', '083174697279', 1, '', '', '', '', '', ''),
(49, 'Badjingan', 'Bima Pratama', '-Pilih Negara-', 'bimayogapratama@gmail.com', '$2y$10$LJQqODnoEOwJ7zYnrFOYWuLevRUzVrD8KEOkLqlPr2raKydIA7Xl.', '082129103012', 1, '', '', '', '', '', ''),
(50, 'apipp', 'apip apip', '-Pilih Negara-', 'muhammadariqibrahim@gmail.com', '$2y$10$AIbBpByWDAAf5QVYLcuiRO5aYYnOWn1ml1OU.OK40ex3Tr/I/PX.W', '085320585980', 1, '', '', '', '', '', ''),
(51, 'zendon', 'zea sryp', 'Indonesia', 'Ridwansyarif94@gmail.com', '$2y$10$dDHzo.PcxvRDc1tKE4SdYenPB0YnErNxWVl/ugQSeReS.BKNp/AqS', '082119502867', 1, '', '', '', '', '', ''),
(52, 'pcellnet', 'Eko Susanto', 'Indonesia', 'siwelasasih@gmail.com', '$2y$10$i7oyKGDwiK2NOf7W7Ry2mOkkECrroE14AG2EUcuWqWNukucxViluS', '083872392119', 1, '', '', '', '', '', ''),
(53, 'moalboring', 'rus wandi', 'Indonesia', 'barayaghabas@gmail.com', '$2y$10$CoiBeWD.7g7XHWjdVkaG4O5BPkqOw3A6WsIm7IHxkmnadQqwOPn4y', '895389901544', 1, '', '', '', '', '', ''),
(54, 'zent07', 'yusuf Huzent', 'Indonesia', 'yusufyusuf9046@gmail.com', '$2y$10$qnYmlGPv.bPLUV.u137Pbed.zhbH7/2mp/ePJzC/7MOHmky9Zuttq', '081388030037', 1, '', '', '', '', '', ''),
(55, 'henda14', 'henda wijaya', 'Indonesia', 'hendahenzart@gmail.com', '$2y$10$MEO1G0XD0xsb3zcYPMAvheDZoRNeLqOvCsVdSLL9DF.Q6TNNS7ZIe', '87762091555', 1, '', '', '', '', '', ''),
(56, 'stresxdanz', 'moch ramdan', 'Indonesia', 'muhammadramdan009@gmail.com', '$2y$10$wXDUib2zSUrWXzG51ThFau1LC2EBpyUbtwVBSAjUT3Fe1zBzQY9qq', '984182828', 1, '', '', '', '', '', ''),
(57, 'edwarzahlen', 'edwar zahlen', 'Indonesia', 'edwarzahlen@gmail.com', '$2y$10$ThwVrf.2An5DsDHMOTLA6uj4Qwu3ME2n9sjvUL3jaArHOng1Rejk2', '082115612874', 1, '', '', '', '', '', ''),
(58, 'Molay', 'Nugraha Akbari', 'Indonesia', 'akbari.nugraha02@gmail.com', '$2y$10$0QCTnTBPRJHuwXQSjrwsnupPGRcXF/.lSNy1zjq9Ho65g2QJiC56i', '082216907363', 1, '', '', '', '', '', ''),
(59, 'KhunEdhan', 'Much Rohmat', '-Pilih Negara-', 'khun.edhan73@gmail.com', '$2y$10$ySq3U8t2dhF8WOBcPYo9kO/ttAP/BUgAKOskOtej34AHLC5IttWhm', '085788534984', 1, '', '', '', '', '', ''),
(60, 'AndriH', 'Andri Hacep', 'Indonesia', 'andreoktaviono49@gmail.com', '$2y$10$0g1EBJT7ZaNMmmzv/rsPpO2flXlXwLym.isnVAAjcjRG7mp7wqrC.', '085320371383', 1, '', '', '', '', '', ''),
(61, 'wowone', 'her mawan', 'Indonesia', 'aayam5968@gmail.com', '$2y$10$hNeHx.mgXbh9UYb6QcBEXO3o18rUgWMFzOY1T3bMClq3fqbcz2lw6', '088291529886', 1, '', '', '', '', '', ''),
(62, 'huryuh', 'huryuh hayeuh', 'Indonesia', 'renaldy.setiawan67@gmail.com', '$2y$10$8DWIEw6LqJCvkExf6pmiiOXkSzeqYJj.WXFvCJwuHTy3KlVZJR8By', '087877871140', 1, '', '', '', '', '', ''),
(63, 'Dplong001', 'Rizky Azahar', 'Indonesia', 'rizkyazahar@gmail.com', '$2y$10$YwhEGORZomxW9NClp3xhFOTI96FT2izaf2St8gsSPNOvPgiMQyDCu', '088223269491', 1, '', '', '', '', '', ''),
(64, 'Husen28', 'Abdulahmuhamad Husen', 'Indonesia', 'baduvan.21gun@gmail.com', '$2y$10$OCvKuA/EbeZsErVQDDZ/9O70HtG5iAB1ASZbHO3MBczHepmDhaDSO', '08975888435', 1, 'BCA', 'Abdulah Muhamad Husen', '8105504337', '-Pilih Virtual Bank-', '08975888435', ''),
(65, 'Humanplg', 'Yudhi Irawan', 'Indonesia', 'humanplg45@gmail.com', '$2y$10$Khj0hy950urtiVQ0GRkaW.uIFo/dq09MbQx4688IcfiU7xbDeLDw.', '083820010393', 1, '', '', '', '', '', ''),
(66, 'bobobost', 'andi noviana', 'Indonesia', 'andinoiana11@gmail.com', '$2y$10$/aCwXTvpY4pEuub/OYDCKO3Zs9BGEDySzY1iFC5.VdRBoO9yPr/pO', '08999958343', 1, '', '', '', '', '', ''),
(67, 'Fahmidot40', 'Fahmi Dzulfikar', 'Indonesia', 'fahmidot40@gmail.com', '$2y$10$N02Zwqrbck8wDduODtAoWe3xix9FMrHFO0V4cZpMGYr8W9cTyoluC', '089504872010', 1, '', '', '', '', '', ''),
(68, 'jibriel', 'jibriel arshalan', 'Indonesia', 'arshalan555@gmail.com', '$2y$10$R6KxR83Ki7so97IeXM6yjeX0SVi0ceyr6t2mKlJ.jZHb7yxnYYMQO', '085773057544', 1, 'BCA', 'MULYANA', '2820383128', '-Pilih Virtual Bank-', '', ''),
(69, 'Danuy', 'Danu unad', 'Indonesia', 'core.punk0001@gmail.com', '$2y$10$dHHZ2wYEIMbJAsphTR.o6O3aMeLSCqEsYDhk566yKj6AwFKMzRBae', '081462251301', 1, '', '', '', '', '', ''),
(70, 'mqlstore', 'Teteng Andri', 'Indonesia', 'mqlstore@gmail.com', '$2y$10$eYVpckQidqhJFi/9JGG5OuLFncc9tluFrSbtIrossduJrxjgg4wai', '85720370707', 1, '', '', '', '', '', ''),
(71, 'LilianaZod', 'Diky Mediawan', 'Indonesia', 'Diky.arc@gmail.com', '$2y$10$nqn4gcw2hOiFaOBmZSmQWe1JA84rpLafghAtTX2vdKvLX3UX/epJy', '085864208602', 1, '', '', '', '', '', ''),
(72, 'Tagin', 'muhammad ramdan', '-Pilih Negara-', 'sindinuraulia22@gmail.com', '$2y$10$w2d5kqJKgRgZJcknphIFCujkj7rA35zmSC1sCn1ZUjCoCYyMVT4/2', '895332659228', 1, '', '', '', '', '', ''),
(73, 'Jekke', 'Jekke Restred', 'Indonesia', 'anonymous.poisoning@gmail.com', '$2y$10$bXf/0rB4bXx.uPw5BciU6O.W0Quw/Z2D3hiEXeSxr74B0feZ/Hsgy', '089663473948', 1, '', '', '', '', '', ''),
(74, 'Naokis', 'Oki Nurdin', 'Indonesia', 'okinurdin4@gmail.com', '$2y$10$Se0kKl5maeIquebjCN3JROQYiFnW9CzTr7Ie1zRBF3z61Na20/DdW', '085223168145', 1, 'BRI', 'Oki Nurdin', '417301013382535', '-Pilih Virtual Bank-', '', ''),
(99, 'wang24', 'wang aprian', 'Indonesia', 'kopinikubdg@gmail.com', '$2y$10$PglJuaaXDB8Gf08P8nhNOuXjdYE1KDaaOAAvuhgEBoPDcbA8jdYOK', '081321164800', 1, '', '', '', '', '', ''),
(101, 'yangTerlupakan', 'Reza Febrian', 'Indonesia', 'ownerclassic@yahoo.com', '$2y$10$y7A5Ci3E/9OkYctNbAFIhOxPCCB1svtFghc8f.43faWUKOgVHmX46', '081211652698', 1, '-Pilih Bank-', 'Reza Febrian', '409101013793532', '-Pilih Virtual Bank-', '', ''),
(102, 'fauzi', 'nur muharrom', 'Indonesia', 'jojoujo98@gmail.com', '$2y$10$FYI6bE6CEeJ8k9PHA.KWFO40wBgb0Rc1GKqv2L6UzjkIsbvhRa6Fq', '0895356323581', 1, '', '', '', '', '', ''),
(103, 'owcah', 'rian andika', 'Indonesia', 'Rian.andika105@gmail.com', '$2y$10$FTeAjHMoZi//Vts55aqpmueSwHk1Dk1M8vwTKz1LTv1nWltUaFKTe', '081254185575', 1, '', '', '', '', '', ''),
(104, 'Justpradana', 'Jaka Pradana', 'Indonesia', 'jakapradana1011@gmail.com', '$2y$10$QDe9dQ1UaCATtNw7FFBFDObctxZKrnQ4QxTLFbxELYGqfy/65HNc2', '087875784087', 1, '', '', '', '', '', ''),
(105, 'indrayakiz', 'Indra Tjakrawiguna', 'Indonesia', 'indratjakrawiguna@gmail.com', '$2y$10$.CPJV4Fy3vpdniFFvWXGq.Z3G3HCrZh.GTQftiYAAq1uJqwve3w8K', '089651525611', 1, '', '', '', '', '', ''),
(106, 'DonJuaN', 'samuel cendikiawan', 'Indonesia', 'samuelcendikiawan@gmail.com', '$2y$10$DSOEwGbs.PPEMQMSnrHQIu6lyy7RywtRw0.MtvDBxO4xmpvunqvZe', '082136527901', 1, '', '', '', '', '', ''),
(107, 'idlarinaldi', 'aldi rinaldi', '-Pilih Negara-', 'buyurngojay333@gmail.com', '$2y$10$WITmV/CAEfTYHFUiauN8Q.Mqv5BU0V17RVl0u6Zq/J1yuKiRTn1OC', '085860199940', 1, '', '', '', '', '', ''),
(108, 'khii992', 'yahya febri', '-Pilih Negara-', 'febryans992@gmail.com', '$2y$10$9ZMRAUt/EGu2URqA3F/B5uyPudEt6e66NAv42qhb28xQ9MftQGVMy', '82115662805', 1, '', '', '', '', '', ''),
(109, 'andreee', 'andree andre', 'Indonesia', 'andreoktaviano50@gmail.com', '$2y$10$canVsSWB5lj1AZU8LGNFFO7zqxclj452NhRfU78s9Vd07L.0tK/Q6', '088220420453', 1, '', '', '', '', '', ''),
(110, 'peacefinder', 'Abraham Jamali', '-Pilih Negara-', 'sabon.mikhori@gmail.com', '$2y$10$yLjylRO85iVvhU8mYheZs.uVWJYpD/Is/f0MoX1OR.93/OYCoR1VW', '09032132255', 1, '', '', '', '', '', ''),
(111, 'ryr1933', 'rafi yuna', 'Indonesia', 'rafiyunarasyid@gmail.com', '$2y$10$cpFH7bpVw8qZ9D55f9pE7OOhw51LNYVbF6zVEwRDYmqgmrWSqcR3i', '085892397589', 1, '', '', '', '', '', ''),
(112, 'chesudt', 'chesdut setiawan', 'Indonesia', 'chesdut12@gmail.com', '$2y$10$XRkwADIfSBMWTQ0K5FsS0.zrOCjGXrsw0YcPIikyjglixeFwrlmWq', '088213963149', 1, '', '', '', '', '', ''),
(113, 'Gustian', 'gustian ds', 'Indonesia', 'gustiandwisetia90@gmail.com', '$2y$10$FZCtWzRf5qfiOyjwHMOt2OAR6TiuiVADemxFQrQdPQVJnEHG1WLYS', '0895332738901', 1, '', '', '', '', '', ''),
(114, 'camat', 'rahmat adijaya', 'Indonesia', 'rahmat.adijaya85@gmail.com', '$2y$10$83P0dSQhe48DhR3IADfC2ei6HSYsCFGKX2HYJnpiME.foXIl2/lnq', '085959969596', 1, '', '', '', '', '', ''),
(115, 'mageman', 'rafa sekigahara', 'Indonesia', 'rafania055@gmail.com', '$2y$10$pvPDfsSNmmfKwvXBYuCVL.Kn7OaTmGmlP.c0vyCeYN0JksfFa/p4a', '0881023552319', 1, '', '', '', '', '', ''),
(116, 'Faiizal', 'Faizal Albani', 'Indonesia', 'Faizalalbaniassipanus13@gmail.com', '$2y$10$gR8EjbcX4/JfOHxvUdThq.qcTD4sLkUdHRtTV/OiOBNkztr6wlFDG', '082129950173', 1, '', '', '', '', '', ''),
(117, 'sandarkol', 'Fajar Kamil', 'Indonesia', 'fajarkamil22@gmail.com', '$2y$10$ae/knoPyD14cZhTqnxfJLuKyz.f28pLfqnv7yM5dZhDyDIkkYXptS', '0895321516839', 1, 'BCA', 'Fajar kamil', '5771073515', '-Pilih Virtual Bank-', '', ''),
(118, 'gerryrifai', 'gerry rifai', 'Indonesia', 'gerryrifai22@gmail.com', '$2y$10$JB6csYjVyqTga50aoU8J/OC1CKGVomMU0S0iGKS3.B7XAGH8opu1O', '0822153033410', 1, '', '', '', '', '', ''),
(119, 'andri49', 'andri ', 'Indonesia', 'realge2asiwi@gmail.com', '$2y$10$Zjkezww7zo7XvFIykabN1.OrdSu.L5pkl8Bz2zf5DylXPQ1PkZ.gu', '085320371383', 1, '', '', '', '', '', ''),
(120, 'Febyy', 'Febyy Myzrael', '-Pilih Negara-', 'awanrons@gmail.com', '$2y$10$a.iRzLM3ev6wEL4E3XO9W.ASowLGhN/JYOzrDWzS7qOZn.L0swapq', '082295509043', 1, '', '', '', '', '', ''),
(121, 'xavier', 'pando caniago', 'Indonesia', 'pando.chaniago@gmail.com', '$2y$10$EUaX8n35fHbQrFbszhzr8e37ww4r/CTiQSJlAsBg6v2Y2Dvk./A.W', '082386333833', 1, '', '', '', '', '', ''),
(122, 'xavegaming', 'carollus hendry', 'Indonesia', 'fotocopyorigin@yahoo.com', '$2y$10$BupH13ZwRpDTPJ9h72xMPeHoc3G25Cf1QR36NbiuiKlpy5vYfDVDq', '082301388870', 1, '', '', '', '', '', ''),
(123, 'haryah', 'haryah hiryih', 'Indonesia', 'bahucing@gmail.com', '$2y$10$4XU6F9SxTyvgekDBpLmmLekV9Jg0Yej53e4glmdRhKDfT1p6b8bi.', '087877871140', 1, '', '', '', '', '', ''),
(124, 'alberic', 'zalde zahwa', 'Indonesia', 'zaldealberic@gmail.com', '$2y$10$Q81u82BqQQtexs2PDLAEF.2djjb4yrWgcnkiQkNcJGZyd3PyS5DaK', '81381998561', 1, '', '', '', '', '', ''),
(125, 'ygfsl', 'yoga faisal', 'Indonesia', 'yogafaisal@outlook.com', '$2y$10$Fi2q3lBn2d.zUvlxmzfCyOZG7uTwO8E1i91F0kJbPGx7yzwgvxQli', '081224662548', 1, '', '', '', '', '', ''),
(126, 'Ysera', 'reksa anggareska', 'Indonesia', 'Yseraiasona@gmail.com', '$2y$10$zZP0G3wKGEUBMVCQ6IRXcOWFwYtCZ8jA3hzAS8B/L9X9g.njfdzJq', '085223168145', 1, '', '', '', '', '', ''),
(127, 'afiftr', 'afif teguh', 'Indonesia', 'afifteguhrismanto@gmail.com', '$2y$10$0kyO89K.chDrAx/uaNd.teWBBtzeziDGA1FDxNKDKzsl9smt1xTNq', '087802475261', 1, 'BNI', 'Afif Teguh Rismanto', '0418979875', 'PAYPAL', 'afifteguhrismanto@gmail.com', ''),
(128, 'qndnet', 'qnd net', 'Indonesia', 'govay2ro@gmail.com', '$2y$10$FNdECNAgX2UXb87R1CQGTOIidCljyEb/BDQUlaKdrRa/dqpnZ7Pg2', '081221229473', 1, '', '', '', '', '', ''),
(130, 'diandranauflyn', 'diandra naufalyn', 'Indonesia', 'diandranaufalyn@yahoo.com', '$2y$10$YnEP1tw6DgyOOfMiI397i.AYyLhywPGl8Sy5FuT/ox.qtnk9U09cC', '085722867721', 1, '', '', '', '', '', ''),
(133, 'cocorobert', 'diandra naufalyn', '-Pilih Negara-', 'diandra.naufalyn@yahoo.com', '$2y$10$nOmpjPZJx0x3ZZI/k8oalOLgUOqc6mAQe1K/DOQezs45q4BpRXZA2', '085722867721', 1, '', '', '', '', '', ''),
(134, 'Vhagner', 'Vhagner Kisaragi', 'Indonesia', 'drextha@gmail.com', '$2y$10$C9AaYwCsShh8xl/8Tg/VHuvk005HlvsC06kT8twoN34kvFmNHVC6q', '087757907739', 1, '', '', '', '', '', ''),
(135, 'AhmadWildan', 'Ahmad Wildan', '-Pilih Negara-', 'aw959595@gmail.com', '$2y$10$vccXjLbUn5JgfDsXs9k8/uZZh65rEa2.2UfLlCoRpRtNMZNQScsHO', '089525037205', 1, '', '', '', '', '', ''),
(136, 'kobid', 'fauzy danil', 'Indonesia', 'fauzydanil7@gmail.com', '$2y$10$DpgAhvdHtPlN4Xntm4U0IORQ54XMBIeHzNOZQYvPdBlRshJ4.glfG', '081218218029', 1, '', '', '', '', '', ''),
(137, 'GoldR', 'Gold Incendius', '-Pilih Negara-', 'navidendiggbet@gmail.com', '$2y$10$TGxIyTdk1zHfz1FDAdzXTu.WDzzpGXFtyv4lmM3pZgR4pl2nZyJKq', '086723847551', 1, '', '', '', '', '', ''),
(138, 'vigie0109', 'Virgiawan Septian', 'Indonesia', 'virgiawan_yudha@ymail.com', '$2y$10$Ov20hEMvzUyULx.g8kj6r./ec9vqI68HoIkxDXkTZieziJrn2NVq2', '87881110080', 1, '', '', '', '', '', ''),
(139, 'Hendrik', 'Hendrik Simanalagi', 'Indonesia', 'unlessithurts@gmail.com', '$2y$10$3KQFxKJQqgaFa7.5PNzPWu41W43G6lvGxaoWNOi8y1iOZFYa9qP6y', '085751680768', 1, '', '', '', '', '', ''),
(140, 'itzmechan', 'itz chanz', 'Indonesia', 'chanzyrusz@gmail.com', '$2y$10$g7NWk2xi4KcUKPpEQfb39O.hyjRiPdlwGnZmglvXsoSbEbj9U6BF.', '081998083438', 1, '', '', '', '', '', ''),
(142, 'xygfsl', 'yoga faisal', 'Indonesia', 'xygfsl@aol.com', '$2y$10$1LqlhYblk6wH.ewCW9onI.lN/uzg37P5Bwt3JP5bvoHA2.18bkRwi', '081224662548', 1, 'BCA', 'Yoga Faisal', '7940235574', '-Pilih Virtual Bank-', '', ''),
(143, 'ronz91', 'Uron Mukhdir', 'Indonesia', 'ron.mukhdir91@gmail.com', '$2y$10$wIz1s9i2v3IzOP4A3PjdvuitYXHvpZa4Dnb2RQVAhSAp0NdT.zoqK', '085794530686', 1, '', '', '', '', '', ''),
(144, 'sa3a91', 'Satria Permadi', 'Indonesia', 'sa3a91@gmail.com', '$2y$10$ian9ZG8kNzNnsGRrmQ6DTuuufc5IXMiO/tuyqBXC5JpkOIReqliDu', '08985629595', 1, '', '', '', '', '', ''),
(145, 'anwar11', 'anwar triyana', 'Indonesia', 'axtonbella112@gmail.com', '$2y$10$u6rOOHL03c87UhfsfTWF2OfGZ5JK4BSizlDLDBYjIdUtlkpJYe1.6', '081298776213', 1, '', '', '', '', '', ''),
(146, 'yonathan', 'yonathan gonzalez', 'Venezuela', 'yonathan.gonzalez2010@hotmail.com', '$2y$10$yH3.nM3AumKBLtRszaTk/eTzDvWc7E2fkYS0EmlzMNetVW/4ngvmG', '4169083289', 1, '-Pilih Bank-', '', '', 'PAYPAL', 'yonathan.gonzalez2010@gmail.com', ''),
(147, 'deska123', 'des ka', 'Indonesia', 'templar1604@outlook.com', '$2y$10$805mhUg8Ou7Hq3lbRAgp5O9yMuITBE7k.GutCyUEwxjPyinVcVH7e', '087710641420', 1, '', '', '', '', '', ''),
(148, 'didanz', 'Mohamad Ramdan', 'Indonesia', 'battlenet.ind@gmail.com', '$2y$10$22.RSf.571cerEVN37D7e.ddt6Gn36xwm5dk6/ACSyV3bYw4NKBru', '081223276088', 1, '', '', '', '', '', ''),
(149, 'axton', 'axton bella', 'Indonesia', 'adi.nopan@gmail.com', '$2y$10$hKbh6TRibQn.aiK5ZmdfFOWEiBN76qQPvrUwCMGojBOvV1tBewXLy', '089839272980', 1, '', '', '', '', '', ''),
(150, 'ccpxdnss', 'Cecep Syahrudin', '-Pilih Negara-', 'cecepdenissyahrudin@gmail.com', '$2y$10$4UWNp7trWt1xy4UIBg692.9LhHPSAGyEbyLQYyX9VJWoCjdqVJyxS', '087737711619', 1, '', '', '', '', '', ''),
(151, 'junaedi', 'juna edy', 'Indonesia', 'junahome125@gmail.com', '$2y$10$gVjCNi9QjE7mJmC5nIHJZ.a0Jn57.zQD8H/AmVQZG8gFCxHtr/pue', '082115248688', 1, '', '', '', '', '', ''),
(152, 'ALkael', 'Andi maulana', 'Indonesia', 'andibeas007@gmail.com', '$2y$10$cSqKfUFx14KRsZntaJ27au2qYulXMzsGDPCI9ZfOmrIjkh8dHNznm', '085223483201', 1, '', '', '', '', '', ''),
(153, 'suhe11', 'suherman herman', 'Indonesia', 'ikikasep44@gmail.com', '$2y$10$mlv7C.mO.IRDt0iKGHI5DeyPTChe0Y1TzKg6Ks4ILMxCfboOgSr3q', '0859110111166', 1, 'BCA', 'suherman', '8320050538', '-Pilih Virtual Bank-', 'ikikasep44@gmail.com', ''),
(154, 'Moubu', 'Aris Munandar', '-Pilih Negara-', 'kyrayuki5@gmail.com', '$2y$10$rjI1zOcUxVvTzbsNyUsaT.uLve2WCnqOsr3F0ONUdHkIckUAuN9Ou', '087832728271', 1, '', '', '', '', '', ''),
(155, 'cyberjambi', 'andrew andrew', 'Indonesia', 'lghtandrew@gmail.com', '$2y$10$Ab4An0tdi1a5/WbRDT7bqe9A3//2EjfMwZQSWnMM9xxaYdh88GIfO', '081273220717', 1, '', '', '', '', '', ''),
(156, 'hendry', 'carollus hendry', 'Indonesia', 'carollus_hendry77@yahoo.com', '$2y$10$rBecv6A6eAP.5iQklOqEE.kNPSueH4SfQM4Kr18EzBc2FQ2G7ar/i', '82301388870', 1, '', '', '', '', '', ''),
(157, 'nagilang', 'gilang surayana', 'Indonesia', 'monomono11112222@gmail.com', '$2y$10$0GU1KO7Ddi0lJC6zI/lSZOpuc6aA465.gQIB5QjGoPxfkhMFJYvj6', '082119978819', 1, '', '', '', '', '', ''),
(158, 'mhdfaisahuda', 'faisa huda', '-Pilih Negara-', 'mhdfaisahuda@gmail.com', '$2y$10$bxuJ/Q6WHkWui5iu3wGBaelQU6982tAit/q8krR9cAxy4jdZ4MnGO', '082387121975', 1, '', '', '', '', '', ''),
(159, 'reztumuu', 'Restu Ariadi', 'Indonesia', 'ojekonline666@gmail.com', '$2y$10$fluWFrsRrqot4f0RTeYlpeyQuCSwwIfqdxyrIHQo0o73qheUZ.AIS', '081214710473', 1, '', '', '', '', '', ''),
(160, 'hukushima', 'muhamad idris', 'Indonesia', 'Mohidris332@gmail.com', '$2y$10$8f/5Fvm7CNC1CAtzgft94.00euFaXmbS3np.ntN/DYAmv1z/zzm2S', '083806994678', 1, '', '', '', '', '', ''),
(161, 'ryujin', 'shin ryujin', 'Indonesia', 'shinryujin411@gmail.com', '$2y$10$tL2fSI5.JaU7bx1DjlyVfebs28y3eoP.P7olpGqrt5XkOwp7DEu6G', '082156379281', 1, '', '', '', '', '', ''),
(162, 'ariapizza', 'Ariapizza Dwimarta', '-Pilih Negara-', 'ariapizza34@gmail.com', '$2y$10$LerBe8tuOg3FrLXA9zowXOxkFjxfMlSjSKaTMdVEmUO4bgGr/uSLq', '089603341953', 1, '', '', '', '', '', ''),
(163, 'vladilas', 'pocong jantan', 'Indonesia', 'whisper_strike@yahoo.com', '$2y$10$NgQ/H8Fnfy2LNTbe3l8oMeoqcaq4bVD.Ax2gQH3IQIgF.Rmd0H6J.', '081220410304', 1, '', '', '', '', '', ''),
(164, 'revelation', 'kevin wahyu', '-Pilih Negara-', 'kwpputra90@gmail.com', '$2y$10$5K3nRfguvKE4hwlZ79.dHOGbV4xpx0qixMQEujqxO4mK756aXPvP.', '089630858461', 1, '', '', '', '', '', ''),
(165, 'YudaMuhammad', 'Yuda Muhammad', 'Indonesia', 'yudadanger22@gmail.com', '$2y$10$CeJCL/ZoXz4LBpTID2PRFO7JyFBMS7lOpwCGrEFbzOzzGrF0L8YGq', '085322478583', 1, '', '', '', '', '', ''),
(166, 'yuscecar', 'yuscecar agung', 'Indonesia', 'yuscecar@gmail.com', '$2y$10$sOzWrHRYV667ds84vS2mWuY3oQm0CY.142JUcSGaBjyF3cYQNfpLe', '87822892803', 1, '', '', '', '', '', ''),
(167, 'razergg', 'ismar rajab', 'Indonesia', 'wowxl88@gmail.com', '$2y$10$QG4TsuTiwyJVQ8Q5J1couuMgSGb5J85bDnx8/NwhaGMi/PY8rafCG', '82346574133', 1, 'BCA', 'ismar rajab', '7920706724', '-Pilih Virtual Bank-', '', ''),
(168, 'AppleID', 'Apple Identification', 'Indonesia', 'wahyuvickysaputra@gmail.com', '$2y$10$OVli6bUMJal0eN/vDZqO4e.Ai0mhWMBSjiUx5Z77i8fC2VwGp8sX2', '081277411360', 1, '', '', '', '', '', ''),
(169, 'vania', 'vania zahira', 'Indonesia', 'ravnetbks@gmail.com', '$2y$10$jiEiPyv2YjoDZ3TjL1fl3urlZ67XEu2MzSDY0rKCMRcKoglB9tnKO', '082388065200', 1, '', '', '', '', '', ''),
(170, 'igor95', 'igor ganteng', '-Pilih Negara-', 'dewascrabble@gmail.com', '$2y$10$6RL4eiT0enuhcPvRAkuYPuWeFM0lwv7G0skw9ShWdt2Xhrx2A/tUy', '082218681805', 1, '', '', '', '', '', ''),
(171, 'Riswandy', 'Aldi Setiawan', '-Pilih Negara-', '3rdaaldi@gmail.com', '$2y$10$8CzS8aXoMmKX8r8EeUv7SOsXuz0.l5MweWvZZRu0yEDwPFAGmkGzq', '082274045737', 1, '', '', '', '', '', ''),
(172, 'kaulanafriza', 'Kaulan Afriza', 'Indonesia', 'rizakaulan@gmail.com', '$2y$10$opqXZSX9ttcb5D51hWRWZOKB9mW/r6NsyM03JZud2HpHv6kW1B.Pi', '08993488560', 1, '', '', '', '', '', ''),
(173, 'Anthony', 'Shigeru Kane', '-Pilih Negara-', 'anthonyjw10@yahoo.com', '$2y$10$BQEZrfLTwRb7U77SxUezGeF1m4w3dsCAo9jRPkLvdyl6Gs511mqFO', '089614160482', 1, '', '', '', '', '', ''),
(174, 'agil111', 'agil angga', 'Indonesia', 'lynix.gg@gmail.com', '$2y$10$ZaspjNgETKNf2BqNMR52Yeuxcdpki1gJH.PYFPYkbL/8D36n8FFee', '081391000097', 1, '', '', '', '', '', ''),
(175, 'andry', 'andry juliansyah', '-Pilih Negara-', 'andryjuliansyah12@gmail.com', '$2y$10$qOaCt5yyRxG3o16RLyHZdOQAUCTF20BW6Iz7A5Eb7o.VkAkNNbxiG', '081371717770', 1, '', '', '', '', '', ''),
(176, 'cpramana', 'candra pramana', 'Indonesia', 'pramanacandra3@gmail.com', '$2y$10$TFOIp88dF3jNLK9AwGdsFeXuU9a3E4WtSbomYWrRmPjFGxLWdxSym', '089637192758', 1, '', '', '', '', '', ''),
(177, 'abdul', 'abdul razak', '-Pilih Negara-', 'abdrzk.korompot13@gmail.com', '$2y$10$0/mc.A7Wg3C4hYfpUPWCqO8EXT1q4E.BJsJpHQu4qFP7wgHBzsLru', '08977645588', 1, '', '', '', '', '', ''),
(178, 'yayan', 'yayan pildiana', 'Indonesia', 'yayan.pildiana27@gmail.com', '$2y$10$cTAnsBjADxiy/wJy6KJs9O/rmN6JXEeVb99CNe8ziGXYBkA9gCW9K', '0881023202163', 1, '', '', '', '', '', ''),
(180, 'kobid139', 'fauzy danil', '-Pilih Negara-', 'babangtamvan139@gmail.com', '$2y$10$JDO3oJw482qJQb0Zf56h1ugsI6q000ZUb4GeaELgTYEuXU0cnvMT.', '081218218029', 1, '', '', '', '', '', ''),
(181, 'Rizki05', 'Rizki Saputra', 'Indonesia', 'rzysptr05@gmail.com', '$2y$10$x04DLA/cnjyYq4DWmyIEPuh4vjxrr287S/PYpf/4wZG0SxTQg0rse', '085603355863', 1, '', '', '', '', '', ''),
(182, 'freeopik', 'Opik Taopik', 'Indonesia', 'freeopik@gmail.com', '$2y$10$6euYtxGF2c3KWv3pSHG4eOF1aD6G4FS.6lyVd7mfJzk3UKQ20lo92', '085320140006', 1, '', '', '', '', '', ''),
(183, 'arief760', 'Arieff Haris', '-Pilih Negara-', 'ariefakbar76@gmail.com', '$2y$10$qj7MV.JZPbiUXnZ4Oi7OouKPx/We/IUWXFUwfCwANBAPIga/lkKPK', '082219586909', 1, '', '', '', '', '', ''),
(184, 'arseovertit', 'Albi Swara', 'Indonesia', 'albiswarapamungkaws@gmail.com', '$2y$10$/BD7O0kUD1Zx7MwbrGNmiuFjVa3Zrrp4R9HKl.nvUSUQ2tobuD7G.', '0881023935997', 1, '', '', '', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `t_admin`
--
ALTER TABLE `t_admin`
  ADD PRIMARY KEY (`id_admin`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indeks untuk tabel `t_items`
--
ALTER TABLE `t_items`
  ADD PRIMARY KEY (`id_items`);

--
-- Indeks untuk tabel `t_kategori`
--
ALTER TABLE `t_kategori`
  ADD PRIMARY KEY (`id_kategori`);

--
-- Indeks untuk tabel `t_order`
--
ALTER TABLE `t_order`
  ADD PRIMARY KEY (`id_order`);

--
-- Indeks untuk tabel `t_pengiriman`
--
ALTER TABLE `t_pengiriman`
  ADD PRIMARY KEY (`id_pengiriman`);

--
-- Indeks untuk tabel `t_server`
--
ALTER TABLE `t_server`
  ADD PRIMARY KEY (`id_item`);

--
-- Indeks untuk tabel `t_stok`
--
ALTER TABLE `t_stok`
  ADD PRIMARY KEY (`id_stock`);

--
-- Indeks untuk tabel `t_users`
--
ALTER TABLE `t_users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `t_admin`
--
ALTER TABLE `t_admin`
  MODIFY `id_admin` tinyint(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `t_items`
--
ALTER TABLE `t_items`
  MODIFY `id_items` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;

--
-- AUTO_INCREMENT untuk tabel `t_kategori`
--
ALTER TABLE `t_kategori`
  MODIFY `id_kategori` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT untuk tabel `t_pengiriman`
--
ALTER TABLE `t_pengiriman`
  MODIFY `id_pengiriman` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `t_server`
--
ALTER TABLE `t_server`
  MODIFY `id_item` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=395;

--
-- AUTO_INCREMENT untuk tabel `t_stok`
--
ALTER TABLE `t_stok`
  MODIFY `id_stock` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=185;

--
-- AUTO_INCREMENT untuk tabel `t_users`
--
ALTER TABLE `t_users`
  MODIFY `id_user` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=187;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
