import Head from "next/head";

function Header({title}) {
  return (
    <div>
        <Head>
        <title>{title} | Eth_Attendance</title>
        <link rel="icon" href="/favicon.ico"/>
       </Head>
    </div>
  )
}

export default Header