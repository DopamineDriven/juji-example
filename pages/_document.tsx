import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
	DocumentInitialProps
} from 'next/document';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps: DocumentInitialProps = await Document.getInitialProps(
			ctx
		);
		return { ...initialProps };
	}
	render() {
		return (
			<Html lang='en-US'>
				<Head>
					<meta charSet='utf-8' />
					<link
						rel='stylesheet'
						href='/course/module_00/lesson_00.07/protected/finish/public/fonts/index.css'
					/>
					<link rel='stylesheet' href='https://use.typekit.net/cub6off.css' />
				</Head>
				<Main />
				<NextScript />
			</Html>
		);
	}
}
