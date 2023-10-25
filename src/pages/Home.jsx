import useFetch from "react-fetch-hook"

const Home = () => {
  const { data } = useFetch("https://randomuser.me/api/")
  return (
    <>
      <img src={data?.results[0]?.picture?.medium} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default Home
