import React, { useEffect, useState } from 'react'

export const Api = () => {

  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [info, setInfo] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`
        )

        const data = await res.json()

        setCharacters(data.results || [])
        setInfo(data.info || null)

      } catch (error) {
        console.log("Cant fetch data", error)
        setCharacters([])
        setInfo(null)
      }
    }

    getData()
  }, [search, page])

  return (
    <div>

      
      <div style={{ textAlign: "center", padding: "20px" }}>
        <input
          type="text"
          placeholder="Search character..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setPage(1) 
          }}
          style={{
            padding: "10px",
            width: "250px",
            borderRadius: "8px"
          }}
        />
      </div>

      <h1 style={{ textAlign: "center" }}>
        Cartoon Characters
      </h1>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          padding: "20px",
          backgroundColor: "#202329"
        }}
      >

        {characters.map((character) => (
          <div
            key={character.id}
            style={{
              backgroundColor: "#3c3e44",
              borderRadius: "10px",
              overflow: "hidden",
              color: "white",
              textAlign: "center"
            }}
          >

            <img
              src={character.image}
              alt={character.name}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover"
              }}
            />

            <h2 style={{ padding: "10px" }}>
              {character.name}
            </h2>

          </div>
        ))}

      </div>

      
      <div style={{ textAlign: "center", padding: "20px" }}>

        <button
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
          disabled={page === 1}
          style={{ margin: "5px", padding: "10px" }}
        >
          Prev
        </button>

        <span style={{ color: "white", margin: "0 10px" }}>
          Page {page}
        </span>

        <button
          onClick={() => setPage(prev => prev + 1)}
          disabled={!info?.next}
          style={{ margin: "5px", padding: "10px" }}
        >
          Next
        </button>

      </div>

    </div>
  )
}

export default Api