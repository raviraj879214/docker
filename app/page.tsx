


export default function Home() {
  return (
    <div>
      API URL Raviraj : {process.env.NEXT_PUBLIC_API_URL}
      DATABASE URL Raviraj : {process.env.DATABASE_URL}
    </div>
  );
}