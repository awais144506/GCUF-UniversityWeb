// pages/404.js
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">Sorry, the page you are looking for does not exist.</p>
      <Link href="/">
        <a className="text-blue-500 mt-4 block">Go back to home</a>
      </Link>
    </div>
  );
}

export default Custom404;
