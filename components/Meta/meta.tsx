import Head from 'next/head';
import { CMS_NAME, HOME_OG_IMAGE_URL } from '@lib/constants';

const prodUrl =
	'https://juji-example.vercel.app/';

const MetaData = () => {
	return (
		<Head>
			<link
				rel='apple-touch-icon'
				type='image/png'
				sizes='180x180'
				href='/meta/apple-touch-icon.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='96x96'
				href='/meta/favicon-96x96.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='32x32'
				href='/meta/favicon-32x32.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='16x16'
				href='/meta/favicon-16x16.png'
			/>
			<link rel='manifest' href='/meta/site.webmanifest' />
			<link rel='mask-icon' href='/meta/safari-pinned-tab.svg' color='#5bbad5' />
			<link rel='shortcut icon' href='/meta/favicon.ico' />
			<link rel='canonical' href={prodUrl} />
			<meta name='robots' content='all' />
			<meta
				name='viewport'
				content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5'
			/>
			<meta name='format-detection' content='telephone=no' />
			<title>Juji Example</title>
			<meta name='msapplication-TileColor' content='#da532c' />
			<meta name='msapplication-config' content='/meta/browserconfig.xml' />
			<meta name='theme-color' content='#ffffff' />
			<link rel='alternate' type='application/rss+xml' href='/feed.xml' />
			<meta name='description' content={`${CMS_NAME}`} />
			<meta charSet='utf-8' />
			<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
			<meta
				name='keywords'
				content='nextjs, typescript, react, iSSG, Apollo-Micro-Server, Apollo-Client, GQL-let, postcss nesting, tailwindcss, vercel, serverless'
			/>
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:site' content='@Dopamine_Driven' />
			<meta name='twitter:title' content='Andrew Ross — Full-Stack Engineer' />
			<meta name='twitter:description' content={`${CMS_NAME}`} />
			<meta name='twitter:image' content={HOME_OG_IMAGE_URL} />
			<meta name='twitter:creator' content='@Dopamine_Driven' />
			<meta property='og:type' content='website' />
			<meta property='og:url' content={prodUrl} />
			<meta property='og:title' content='Juji - Example' />
			<meta property='og:description' content={`${CMS_NAME}`} />
			<meta property='og:image' content={HOME_OG_IMAGE_URL} />
			<meta property='og:image:width' content='2048' />
			<meta property='og:image:height' content='1170' />
		</Head>
	);
};

export default MetaData;
