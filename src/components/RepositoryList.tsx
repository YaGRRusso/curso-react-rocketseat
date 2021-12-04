import {RepositoryItem} from "./RepositoryItem"

import '../styles/repositories.scss'
import { useEffect, useState } from "react"

// https://api.github.com/users/YaGRRusso/repos

interface RepositoryList {
  id: string
  name: string
  description: string
  html_url: string
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<RepositoryList[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/YaGRRusso/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  },[])

  return(
    <section className='repository-list'>
      <h1>Lista de Reps</h1>

      <ul>
        
        {repositories.map(repository => {
          return <RepositoryItem key={repository.id} repo={repository}/>
        })}

      </ul>
    </section>
  )
}