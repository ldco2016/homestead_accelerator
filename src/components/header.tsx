import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/presentation">Presentation</Link>
      <Link href="/quality">Quality</Link>
      <Link href="/contact">Contact</Link>
    </div>
  )
}