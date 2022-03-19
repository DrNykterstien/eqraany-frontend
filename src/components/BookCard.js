import { Card, Rate } from 'antd';

function BookCard(props) {
  const { data } = props;
  return (
    <>
      <Card
        style={{ width: '200px', margin: '5px', borderRadius: '0.375rem' }}
        className='overflow-hidden drop-shadow transition-all duration-300 hover:drop-shadow-lg'
        cover={
          <div
            style={{ borderRadius: '0.375rem 0.375rem 0rem 0rem' }}
            className='overflow-hidden'>
            <img
              className='hover:opacity-90 transition-all duration-1000 hover:scale-110'
              src={data.thumbnailUrl}
              alt={data.title}
              title={data.title}
            />
          </div>
        }
        bodyStyle={{ padding: '.75rem' }}>
        <div className='mb-3'>
          <Rate
            disabled
            allowHalf
            value={data.rate}
          />
        </div>

        <a
          className='no-underline'
          href={data.bookUrl}>
          <h3 className='text-xl font-bold text-gray-700 hover:text-gray-900'>{data.title}</h3>
        </a>
        <a
          className='no-underline'
          href={data.author.url}>
          <h4 className='font-medium text-gray-600 hover:text-gray-700'>{data.author.name}</h4>
        </a>
      </Card>
    </>
  );
}

export default BookCard;
