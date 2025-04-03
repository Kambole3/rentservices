import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/app/app'
import { Setting } from './const';
import offers from './mocks/offers';
import { offersList } from './mocks/offer-list';
import { Provider } from 'react-redux';
import { store } from './store';



const root=createRoot(document.getElementById('root') as HTMLElement
)

root.render(
  <StrictMode>
    <Provider store={store}> <App rentalOffersCount={Setting.rentalOffersCount}
    offers={offers} offersList={offersList} 
    /></Provider>
    
  </StrictMode>,
)



