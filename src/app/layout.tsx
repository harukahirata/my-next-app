import "./globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
	title: "My App",
	description: "自分で作ったNext.jsアプリ",
};

export default function RootLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<html lang="ja">
			<body>
				<Header />
				<main>{children}　</main>
				<p>testtest</p>
				<p>test</p>
				<Footer />
			</body>
		</html>
	);
}
