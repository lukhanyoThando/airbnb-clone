import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import { MediumCard } from '../components/MediumCard'
import SmallCards from '../components/SmallCards'

interface data{
  img : string,
  location:string,
  distance:string
}

const Home: NextPage = ({exploreData, cardsData}) => {
  return (
    <div className="">
      <Head>
        <title>Luks Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    

    {/**header */}
     <Header/>

    {/**Banner */}
    <Banner/>

    <main className='max-w-5xl mx-auto px-8 sm:px-16 '>
      <section className='pt-6'>
        <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

        {/**Pull some data from server -Api endpoints*/}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {exploreData?.map((item:data) => (
          <SmallCards key={item.img}
          img={item.img}
          distance={item.distance}
          location={item.location}/>
        ))}
        </div>
      </section>

      <section>
        <h2 className='text-4xl font-semibold py-8'>Live Anywahere</h2>
        <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
        {cardsData?.map((item:data)=>(
          <MediumCard key={item.img} 
          img={item.img}
          title={item.title}
          />
        ))}
        </div>
      </section>
    <LargeCard
        img="https://links.papareact.com/4cj"
        title="The Greatest Outdors"
         description="Wishlists curated by Airbnb"
         buttonText = "Get Inspired"/>
    </main>
    <Footer/>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  );

  const cardsData = await fetch("https:links.papareact.com/zp1").then((res)=>
  res.json()
  );

  return{
    props: {
      exploreData,
      cardsData,
    }
  }
 }

export default Home

