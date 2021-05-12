export default function Header(props) {
  return (
    <header className='header row center'>
      <div>
          <h1>Tour Arena</h1>
      </div>
      <div>
        <h2>
          Active bookings {' '}
          {props.countCartItems ? (
            <span className='bookings'>{props.countCartItems}</span>
          ) : (
            ''
          )}
        </h2>
      </div>
    </header>
  )
}
