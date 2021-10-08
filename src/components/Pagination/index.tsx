import { NavPagination } from './style'

interface PaginationProps {
  postsPerPage: number
  totalPosts: number
  paginate: (pageNumber: number) => void
  currentPage: number
}

export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}: PaginationProps) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <NavPagination>
      {pageNumbers.map((number) => (
        <li key={number}>
          <button
            onClick={() => paginate(number)}
            type="button"
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </button>
        </li>
      ))}
    </NavPagination>
  )
}
