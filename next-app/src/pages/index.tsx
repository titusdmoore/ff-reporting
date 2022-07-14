import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css';
import Sidebar from '../components/sidebar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Incident Reporting System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex'>
        <Sidebar className='h-screen w-64 py-4' />
        <div className='flex-1 px-8 pt-4'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas ante eu interdum euismod. Nulla tellus magna, imperdiet quis nulla eget, molestie sagittis eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean tincidunt congue consequat. Mauris vestibulum commodo sem, vitae faucibus libero commodo at. Integer vestibulum nibh eu commodo pharetra. Phasellus ligula quam, mattis id metus eu, vehicula hendrerit purus. Suspendisse potenti. Vestibulum iaculis luctus neque vel pretium. Cras scelerisque odio et eros convallis fringilla. In in mattis mauris. Sed ultricies tortor a arcu dictum, sit amet euismod metus iaculis.</p>
          <p>Integer eget odio nibh. In id elit sit amet enim sodales rhoncus. Mauris mattis nec lorem quis vehicula. Vestibulum vehicula, orci quis dictum efficitur, erat tortor ultricies urna, vitae sollicitudin felis nisi sed turpis. Cras mi nisi, auctor sed aliquam ultricies, accumsan at mi. Suspendisse vel ligula et elit dictum tincidunt quis id nisl. Nullam accumsan faucibus arcu et finibus. In hac habitasse platea dictumst. Suspendisse nec magna justo. Sed eget neque sit amet lacus sodales iaculis vel eget metus. Vestibulum sodales, purus eu vestibulum tempor, justo sapien congue neque, nec tincidunt enim arcu sagittis nisl.</p>
          <p>Aenean eget vehicula nibh, a dignissim lectus. Sed imperdiet nec nibh quis venenatis. Morbi lacus lorem, hendrerit non nibh nec, accumsan dictum diam. Morbi bibendum, odio eu fermentum facilisis, justo odio vulputate massa, sit amet maximus metus turpis at tortor. Nullam non eros congue, condimentum nulla in, sollicitudin urna. Proin sit amet tincidunt felis. Cras maximus orci id tortor blandit maximus. Praesent et ullamcorper dolor. Suspendisse non accumsan tortor. Aliquam tincidunt metus nec velit posuere fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Praesent id libero in nulla porta aliquam ac eu libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sollicitudin enim in risus porta faucibus. Vivamus feugiat tempor ultricies. Donec pellentesque nisl non euismod auctor. Morbi a ornare quam. Nam facilisis feugiat nulla, non auctor enim hendrerit ac. Nullam lorem tellus, porta quis efficitur in, sagittis quis felis. Proin erat erat, tincidunt at dui a, tristique hendrerit mi. Nunc tristique nunc non mi laoreet, et bibendum est auctor. Vestibulum tortor enim, aliquam in cursus vitae, ultrices a nisi. Vivamus auctor ante enim, tempus mattis diam rhoncus at.</p>
          <p>Proin dapibus molestie diam, eu malesuada erat egestas at. Vestibulum vulputate, justo eget ullamcorper varius, lectus magna varius massa, eget varius odio massa eget dolor. Pellentesque a velit vitae turpis pulvinar maximus vitae a neque. Vivamus consectetur pharetra tortor, sed elementum sem fringilla vitae. Donec finibus nibh risus, non semper erat porta at. Fusce tempor aliquam risus, ut ultrices neque condimentum in. In lobortis eleifend dolor, vel posuere felis vestibulum sed. </p>
        </div>
      </main>
    </div>
  )
}
