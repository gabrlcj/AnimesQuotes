import { useEffect, useState } from 'react'
import { AnimeList } from '../../@types/type'
import AnimePagination from '../../components/AnimePagination'
import Loading from '../../components/Loading'
import Pagination from '../../components/Pagination'
import api from '../../service/api'
import { Container } from './style'

export default function AvailableAnimes() {
  const [allAnimes, setAllAnimes] = useState<AnimeList[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [postPerPage] = useState<number>(50)

  useEffect(() => {
    async function listOfAnimes() {
      setLoading(true)
      const animes = await api.get('available/anime')
      setAllAnimes(animes.data)
      setLoading(false)
    }

    listOfAnimes()
  }, [])

  // Get current posts
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPosts = allAnimes.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <Container>
      <h1>All available animes</h1>
      {loading === true ? (
        <Loading />
      ) : (
        <>
          <Pagination
            postsPerPage={postPerPage}
            totalPosts={allAnimes.length}
            paginate={paginate}
            currentPage={currentPage}
          />
          <AnimePagination allAnimes={currentPosts} loading={loading} />
        </>
      )}
    </Container>
  )
}
