import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  position: absolute;
  top: 50px;
  background: transparent;
  display: flex;
  overflow: hidden;
  gap: 10px;
  max-width: 100vw;

  .data {
    display: flex;
    align-items: center;
    flex: 0 0 auto;
    gap: 1rem;
    color: white;
    animation: slide 25s linear infinite;
  }

  @keyframes slide {
    0% {
      transform: translateX(0%);
    }

    100% {
      transform: translateX(-105%);
    }
  }
`

const TickerTape: React.FC = () => {
  const symbols: string[] = ['AAPL', 'GOOGL', 'MSFT', 'META', 'TSLA']
  const baseUrl: string = 'https://api.iex.cloud/v1/data/core/QUOTE'
  const token = import.meta.env.VITE_IEX_TOKEN
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async (symbols: string[]) => {
      try {
        const res = await fetch(`${baseUrl}/${symbols.join()}?token=${token}`)
        const data = await res.json()
        console.log(data)
        setData(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData(symbols)
  }, [])

  return (
    <Wrapper>
      <div className='data'>
        {data.map((item, index) => (
          <div className='gap' key={index}>
            <span className=''>
              {`${item.symbol} $${item.latestPrice} ${
                item.change > 0 ? '+' : ''
              }${item.change.toFixed(2)} (${item.changePercent.toFixed(
                2
              )}%)  Last: ${item.latestTime}`}
            </span>
          </div>
        ))}
      </div>
      <div className='data'>
        {data.map((item, index) => (
          <div className='gap' key={index}>
            <span className=''>
              {`${item.symbol} $${item.latestPrice} ${
                item.change > 0 ? '+' : ''
              }${item.change.toFixed(2)} (${item.changePercent.toFixed(
                2
              )}%)  Last: ${item.latestTime}`}
            </span>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default TickerTape
