import React from 'react'

const Race: React.FC = () => {
  return (
    <div className='flex flex-col mb-9 flex-grow flex-no-wrap flex-shrink-0'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Starting Grid - TURKISH GP 2020
      </div>
      <div className='w-full grid sm:flex sm:flex-col justify-around py-0 bg-green-600 rounded-md mb-4'>
        <div className='align-middle min-w-full overflow-x-auto rounded-t-md rounded-b-md  bg-green-600 px-8'>
          <div className='grid grid-cols-3 gap-4 pt-4 pb-4 bg-gray-700 border-l-8 border-r-8 border-white-100'>
            <div className='col-span-3 h-1 flex items-center justify-center border-dashed border-b-4  border-white-100'></div>
            <div className='col-span-2 bg-transparent h-12 flex items-center justify-center ml-2 mr-4 mb-2 pl-2 rounded-tl-lg border-l-2 border-t-2 border-white-100'>
              <div className='flex-shrink-0 flex items-center justify-center w-8 bg-mercedes p-2 text-white-100 text-sm leading-5 font-medium rounded-tl-lg rounded-br-lg'>
                1
              </div>
              <div className='flex-1 flex items-center justify-between'>
                <div className='flex-1 px-2 py-2 text-sm leading-tight'>
                  <p className='text-white-100 uppercase'>Hamilton</p>
                </div>
              </div>
            </div>
            <div className='col-span-1 bg-transparent h-12 flex items-center justify-center'></div>
            <div className='col-span-1 bg-transparent h-12 flex items-center justify-center'></div>
            <div className='col-span-2 bg-transparent h-12 flex items-center justify-center ml-4 mr-2 mb-4 pl-2 rounded-tl-lg border-l-2 border-t-2 border-white-100'>
              <div className='flex-shrink-0 flex items-center justify-center w-8 bg-mercedes p-2 text-white-100 text-sm leading-5 font-medium rounded-tl-lg rounded-br-lg'>
                2
              </div>
              <div className='flex-1 flex items-center justify-between'>
                <div className='flex-1 px-2 py-2 text-sm leading-tight'>
                  <p className='text-white-100 uppercase'>Bottas </p>
                </div>
              </div>
            </div>
            <div className='col-span-2 bg-transparent h-12 flex items-center justify-center ml-2 mr-4 mb-2 pl-2 rounded-tl-lg border-l-2 border-t-2 border-white-100'>
              <div className='flex-shrink-0 flex items-center justify-center w-8 bg-redbull p-2 text-white-100 text-sm leading-5 font-medium rounded-tl-lg rounded-br-lg'>
                3
              </div>
              <div className='flex-1 flex items-center justify-between'>
                <div className='flex-1 px-2 py-2 text-sm leading-tight'>
                  <p className='text-white-100 uppercase'>Verstappen</p>
                </div>
              </div>
            </div>
            <div className='col-span-1 bg-transparent h-12 flex items-center justify-center'></div>
            <div className='col-span-1 bg-transparent h-12 flex items-center justify-center'></div>
            <div className='col-span-2 bg-transparent h-12 flex items-center justify-center ml-4 mr-2 mb-4 pl-2 rounded-tl-lg border-l-2 border-t-2 border-white-100'>
              <div className='flex-shrink-0 flex items-center justify-center w-8 bg-redbull p-2 text-white-100 text-sm leading-5 font-medium rounded-tl-lg rounded-br-lg'>
                4
              </div>
              <div className='flex-1 flex items-center justify-between'>
                <div className='flex-1 px-2 py-2 text-sm leading-tight'>
                  <p className='text-white-100 uppercase'>Albon</p>
                </div>
              </div>
            </div>
            <div className='col-span-2 bg-transparent h-12 flex items-center justify-center ml-2 mr-4 mb-2 pl-2 rounded-tl-lg border-l-2 border-t-2 border-white-100'>
              <div className='flex-shrink-0 flex items-center justify-center w-8 bg-racingpoint p-2 text-white-100 text-sm leading-5 font-medium rounded-tl-lg rounded-br-lg'>
                5
              </div>
              <div className='flex-1 flex items-center justify-between'>
                <div className='flex-1 px-2 py-2 text-sm leading-tight'>
                  <p className='text-white-100 uppercase'>Perez</p>
                </div>
              </div>
            </div>
            <div className='col-span-1 bg-transparent h-12 flex items-center justify-center'></div>
            <div className='col-span-1 bg-transparent h-12 flex items-center justify-center'></div>
            <div className='col-span-2 bg-transparent h-12 flex items-center justify-center ml-4 mr-2 mb-4 pl-2 rounded-tl-lg border-l-2 border-t-2 border-white-100'>
              <div className='flex-shrink-0 flex items-center justify-center w-8 bg-renault three-d-text p-2 text-white-100 text-sm leading-5 font-medium rounded-tl-lg rounded-br-lg'>
                6
              </div>
              <div className='flex-1 flex items-center justify-between'>
                <div className='flex-1 px-2 py-2 text-sm leading-tight'>
                  <p className='text-white-100 uppercase'>Ricciardo</p>
                </div>
              </div>
            </div>
            <div className='col-span-2 bg-transparent h-12 flex items-center justify-center ml-2 mr-4 mb-2 pl-2 rounded-tl-lg border-l-2 border-t-2 border-white-100'>
              <div className='flex-shrink-0 flex items-center justify-center w-8 bg-renault three-d-text p-2 text-white-100 text-sm leading-5 font-medium rounded-tl-lg rounded-br-lg'>
                7
              </div>
              <div className='flex-1 flex items-center justify-between'>
                <div className='flex-1 px-2 py-2 text-sm leading-tight'>
                  <p className='text-white-100 uppercase'>Ocon</p>
                </div>
              </div>
            </div>
            <div className='col-span-1 bg-transparent h-12 flex items-center justify-center'></div>
            <div className='col-span-1 bg-transparent h-12 flex items-center justify-center'></div>
            <div className='col-span-2 bg-transparent h-12 flex items-center justify-center ml-4 mr-2 mb-4 pl-2 rounded-tl-lg border-l-2 border-t-2 border-white-100'>
              <div className='flex-shrink-0 flex items-center justify-center w-8 bg-alphatauri p-2 text-white-100 text-sm leading-5 font-medium rounded-tl-lg rounded-br-lg'>
                8
              </div>
              <div className='flex-1 flex items-center justify-between'>
                <div className='flex-1 px-2 py-2 text-sm leading-tight'>
                  <p className='text-white-100 uppercase'>Gasly</p>
                </div>
              </div>
            </div>
            <div className='col-span-2 bg-transparent h-12 flex items-center justify-center ml-2 mr-4 mb-2 pl-2 rounded-tl-lg border-l-2 border-t-2 border-white-100'>
              <div className='flex-shrink-0 flex items-center justify-center w-8 bg-mclaren p-2 text-white-100 text-sm leading-5 font-medium rounded-tl-lg rounded-br-lg'>
                9
              </div>
              <div className='flex-1 flex items-center justify-between'>
                <div className='flex-1 px-2 py-2 text-sm leading-tight'>
                  <p className='text-white-100 uppercase'>Norris</p>
                </div>
              </div>
            </div>
            <div className='col-span-1 bg-transparent h-12 flex items-center justify-center'></div>
            <div className='col-span-1 bg-transparent h-12 flex items-center justify-center'></div>
            <div className='col-span-2 bg-transparent h-12 flex items-center justify-center ml-4 mr-2 mb-4 pl-2 rounded-tl-lg border-l-2 border-t-2 border-white-100'>
              <div className='flex-shrink-0 flex items-center justify-center w-8 bg-alphatauri p-2 text-white-100 text-sm leading-5 font-medium rounded-tl-lg rounded-br-lg'>
                10
              </div>
              <div className='flex-1 flex items-center justify-between'>
                <div className='flex-1 px-2 py-2 text-sm leading-tight'>
                  <p className='text-white-100 uppercase'>Kvyat</p>
                </div>
              </div>
            </div>
            <div className='col-span-2 bg-transparent h-12 flex items-center justify-center ml-2 mr-4 mb-2 pl-2 rounded-tl-lg border-l-2 border-t-2 border-white-100'>
              <div className='flex-shrink-0 flex items-center justify-center w-8 bg-ferrari p-2 text-white-100 text-sm leading-5 font-medium rounded-tl-lg rounded-br-lg'>
                11
              </div>
              <div className='flex-1 flex items-center justify-between'>
                <div className='flex-1 px-2 py-2 text-sm leading-tight'>
                  <p className='text-white-100 uppercase'>Vettel</p>
                </div>
              </div>
            </div>
            <div className='col-span-1 bg-transparent h-12 flex items-center justify-center'></div>
            <div className='col-span-1 bg-transparent h-12 flex items-center justify-center'></div>
            <div className='col-span-2 bg-transparent h-12 flex items-center justify-center ml-4 mr-2 mb-4 pl-2 rounded-tl-lg border-l-2 border-t-2 border-white-100'>
              <div className='flex-shrink-0 flex items-center justify-center w-8 bg-ferrari p-2 text-white-100 text-sm leading-5 font-medium rounded-tl-lg rounded-br-lg'>
                12
              </div>
              <div className='flex-1 flex items-center justify-between'>
                <div className='flex-1 px-2 py-2 text-sm leading-tight'>
                  <p className='text-white-100 uppercase'>Leclerc</p>
                </div>
              </div>
            </div>
            <div className='col-span-2 bg-transparent h-12 flex items-center justify-center ml-2 mr-4 mb-2 pl-2 rounded-tl-lg border-l-2 border-t-2 border-white-100'>
              <div className='flex-shrink-0 flex items-center justify-center w-8 bg-racingpoint p-2 text-white-100 text-sm leading-5 font-medium rounded-tl-lg rounded-br-lg'>
                13
              </div>
              <div className='flex-1 flex items-center justify-between'>
                <div className='flex-1 px-2 py-2 text-sm leading-tight'>
                  <p className='text-white-100 uppercase'>Stroll</p>
                </div>
              </div>
            </div>
            <div className='col-span-1 bg-transparent h-12 flex items-center justify-center'></div>
            <div className='col-span-1 bg-transparent h-12 flex items-center justify-center'></div>
            <div className='col-span-2 bg-transparent h-12 flex items-center justify-center ml-4 mr-2 mb-4 pl-2 rounded-tl-lg border-l-2 border-t-2 border-white-100'>
              <div className='flex-shrink-0 flex items-center justify-center w-8 bg-williams p-2 text-white-100 text-sm leading-5 font-medium rounded-tl-lg rounded-br-lg'>
                14
              </div>
              <div className='flex-1 flex items-center justify-between'>
                <div className='flex-1 px-2 py-2 text-sm leading-tight'>
                  <p className='text-white-100 uppercase'>Russell</p>
                </div>
              </div>
            </div>
            <div className='col-span-2 bg-transparent h-12 flex items-center justify-center ml-2 mr-4 mb-2 pl-2 rounded-tl-lg border-l-2 border-t-2 border-white-100'>
              <div className='flex-shrink-0 flex items-center justify-center w-8 bg-mclaren p-2 text-white-100 text-sm leading-5 font-medium rounded-tl-lg rounded-br-lg'>
                15
              </div>
              <div className='flex-1 flex items-center justify-between'>
                <div className='flex-1 px-2 py-2 text-sm leading-tight'>
                  <p className='text-white-100 uppercase'>Sainz</p>
                </div>
              </div>
            </div>
            <div className='col-span-1 bg-transparent h-12 flex items-center justify-center'></div>
            <div className='col-span-1 bg-transparent h-12 flex items-center justify-center'></div>
            <div className='col-span-2 bg-transparent h-12 flex items-center justify-center ml-4 mr-2 mb-4 pl-2 rounded-tl-lg border-l-2 border-t-2 border-white-100'>
              <div className='flex-shrink-0 flex items-center justify-center w-8 bg-alfaromeo p-2 text-white-100 text-sm leading-5 font-medium rounded-tl-lg rounded-br-lg'>
                16
              </div>
              <div className='flex-1 flex items-center justify-between'>
                <div className='flex-1 px-2 py-2 text-sm leading-tight'>
                  <p className='text-white-100 uppercase'>Giovinazzi</p>
                </div>
              </div>
            </div>
            <div className='col-span-2 bg-transparent h-12 flex items-center justify-center ml-2 mr-4 mb-2 pl-2 rounded-tl-lg border-l-2 border-t-2 border-white-100'>
              <div className='flex-shrink-0 flex items-center justify-center w-8 bg-alfaromeo p-2 text-white-100 text-sm leading-5 font-medium rounded-tl-lg rounded-br-lg'>
                17
              </div>
              <div className='flex-1 flex items-center justify-between'>
                <div className='flex-1 px-2 py-2 text-sm leading-tight'>
                  <p className='text-white-100 uppercase'>Raikkonen</p>
                </div>
              </div>
            </div>
            <div className='col-span-1 bg-transparent h-12 flex items-center justify-center'></div>
            <div className='col-span-1 bg-transparent h-12 flex items-center justify-center'></div>
            <div className='col-span-2 bg-transparent h-12 flex items-center justify-center ml-4 mr-2 mb-4 pl-2 rounded-tl-lg border-l-2 border-t-2 border-white-100'>
              <div className='flex-shrink-0 flex items-center justify-center w-8 bg-haas p-2 text-white-100 text-sm leading-5 font-medium rounded-tl-lg rounded-br-lg'>
                18
              </div>
              <div className='flex-1 flex items-center justify-between'>
                <div className='flex-1 px-2 py-2 text-sm leading-tight'>
                  <p className='text-white-100 uppercase'>Magnussen</p>
                </div>
              </div>
            </div>
            <div className='col-span-2 bg-transparent h-12 flex items-center justify-center ml-2 mr-4 mb-2 pl-2 rounded-tl-lg border-l-2 border-t-2 border-white-100'>
              <div className='flex-shrink-0 flex items-center justify-center w-8 bg-haas p-2 text-white-100 text-sm leading-5 font-medium rounded-tl-lg rounded-br-lg'>
                19
              </div>
              <div className='flex-1 flex items-center justify-between'>
                <div className='flex-1 px-2 py-2 text-sm leading-tight'>
                  <p className='text-white-100 uppercase'>Grosjean</p>
                </div>
              </div>
            </div>
            <div className='col-span-1 bg-transparent h-12 flex items-center justify-center'></div>
            <div className='col-span-1 bg-transparent h-12 flex items-center justify-center'></div>
            <div className='col-span-2 bg-transparent h-12 flex items-center justify-center ml-4 mr-2 mb-4 pl-2 rounded-tl-lg border-l-2 border-t-2 border-white-100'>
              <div className='flex-shrink-0 flex items-center justify-center w-8 bg-williams p-2 text-white-100 text-sm leading-5 font-medium rounded-tl-lg rounded-br-lg'>
                20
              </div>
              <div className='flex-1 flex items-center justify-between'>
                <div className='flex-1 px-2 py-2 text-sm leading-tight'>
                  <p className='text-white-100 uppercase'>Latifi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Race
