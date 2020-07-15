import React from 'react'
import YouTube from 'react-youtube-embed'
import ContentLink from 'components/link/ContentLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='rounded-tl-xxl text-left pb-2'>
        <div className='rounded-tl-xxl youtube'>
          <YouTube id='Xpa9ol1VW5E' />
        </div>
        <div className='px-2 py-2'>
          <ContentLink
            href='https://unbeaten.com/formula1/F1-2020-15072020-LatestNews'
            target='_blank'>
            LATEST F1 NEWS: Ferrari, Sebastian Vettel, Lewis Hamilton and Daniel
            Ricciardo
          </ContentLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            <ul className='list-disc pl-8'>
              <li>Ferrari Lost In Austria</li>
              <li>Hamilton Kneels Again</li>
              <li>Kubica Back On Track</li>
              <li>Vettel 2021 Options Limited</li>
              <li>Mugello Set For F1</li>
              <li>Daimler CEO Confirms Line-up</li>
              <li>FIA Issues Warning</li>
              <li>Ricciardo Says No To Alonso</li>
              <li>Hungary To Be Fitness Test</li>
            </ul>
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Courtesy{' '}
            <ContentLink href='https://unbeaten.com/formula1' target='_blank'>
              unbeaten.com
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
