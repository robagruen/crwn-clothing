import './categories.styles.scss';

function App() {

  const categories = [
    {
      id: 0,
      title: 'Hats',
      subtitle: 'Shop Now'
    },
    {
      id: 1,
      title: 'Jackets',
      subtitle: 'Shop Now'
    },
    {
      id: 2,
      title: 'Sneakers',
      subtitle: 'Shop Now'
    },
    {
      id: 3,
      title: 'Women',
      subtitle: 'Shop Now'
    },
    {
      id: 4,
      title: 'Men',
      subtitle: 'Shop Now'
    }
  ];

  return (
    <div className="categories-container">
      {
        categories.map((category) => (
          <div key={ category.id } className="category-container">
            <div className="background-image">
              {/* <img /> */}
            </div>
            <div className="category-body-container">
              <h2>{ category.title }</h2>
              <p>{ category.subtitle }</p>
            </div>
          </div>
        ))
      }  
    </div>
  );
}

export default App;
