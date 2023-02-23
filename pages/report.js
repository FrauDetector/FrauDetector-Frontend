import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <Head>
        <title>FrauDetector</title>
        <meta name="description" content="FrauDetector is a public fraud database to prevent scammers from using your services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <div className={styles.main}>
            <h1>FrauDetector Reporting form</h1>
            <form>
              <label for="email">Your email</label>
              <input type="email" id="name" name="email" placeholder="What's your email?"></input>
              <label for="name">Name</label>
              <input type="text" id="name" name="name" placeholder="What's their name?"></input>
              <label for="file">Upload a screenshot of the fraud</label>
              <input type="file" name="file" accept="image/png, image/gif, image/jpeg" multiple />
              <input type="submit" value="Submit"></input>
            </form>
            <form>
              <label for="email">Your email</label>
              <input type="email" id="name" name="email" placeholder="What's your email?"></input>
              <label for="name">Email</label>
              <input type="email" id="name" name="name" placeholder="What's their email?"></input>
              <label for="file">Upload evidence</label>
              <input type="file" name="file" accept="image/png, image/gif, image/jpeg" multiple />
              <input type="submit" value="Submit"></input>
            </form>
            <form>
              <label for="email">Your email</label>
              <input type="email" id="name" name="email" placeholder="What's your email?"></input>
              <label for="address">Address</label>
              <textarea type="text" id="name" name="address" placeholder="What's their address"></textarea>
              <label for="file">Upload evidence</label>
              <input type="file" name="file" accept="image/png, image/gif, image/jpeg" multiple />
              <input type="submit" value="Submit"></input>
            </form>
            <form>
              <label for="email">Your email</label>
              <input type="email" id="name" name="email" placeholder="What's your email?"></input>
              <label for="phone">Phone number</label>
              <input type="tel" id="name" name="phone" placeholder="What's their phone number?"></input>
              <label for="file">Upload evidence</label>
              <input type="file" name="file" accept="image/png, image/gif, image/jpeg" multiple />
              <input type="submit" value="Submit"></input>
            </form>
            <form>
              <p>We ask for the last 4 digits of the card so we can contact the card issuer</p>
              <label for="email">Your email</label>
              <input type="email" id="name" name="email" placeholder="What's your email?"></input>
              <label for="digits">Last 4 debit/credit digits</label>
              <input type="text" id="name" name="digits" placeholder="What's their last 4 digits?"></input>
              <label for="file">Upload evidence</label>
              <input type="file" name="file" accept="image/png, image/gif, image/jpeg" multiple />
              <input type="submit" value="Submit"></input>
            </form>
          </div>
        </div>    
      </main>
    </>
  )
}
