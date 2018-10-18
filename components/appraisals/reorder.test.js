import { reorder, reorderItemMap } from './reorder'

let args

describe('Reorder', () => {
  beforeAll(() => {
    args = [
      [
        {
          email: 'jeanlucasdecarvalho@gmail.com',
          name: 'Jean',
          certainty: 0.8,
          level: 3
        },
        {
          email: 'carolmachado@helabs.com',
          name: 'Carol',
          certainty: 0.6,
          level: 3
        }
      ],
      1,
      0
    ]
  })

  it('should be sane', () => {
    expect(reorder).toBeDefined()
  })

  it('should reorder list', () => {
    const expectedResult = [
      {
        email: 'carolmachado@helabs.com',
        name: 'Carol',
        certainty: 0.6,
        level: 3
      },
      {
        email: 'jeanlucasdecarvalho@gmail.com',
        name: 'Jean',
        certainty: 0.8,
        level: 3
      }
    ]

    expect(reorder(...args)).toEqual(expectedResult)
  })
})

describe('ReorderItemMap', () => {
  beforeAll(() => {
    args = [
      {
        itemMap: {
          '3': [
            {
              email: 'carolmachado@helabs.com',
              name: 'Carol',
              certainty: 0.6,
              level: 3
            },
            {
              email: 'jeanlucasdecarvalho@gmail.com',
              name: 'Jean',
              certainty: 0.8,
              level: 2
            }
          ],
          '-2': [
            {
              email: 'klaus@helabs.com',
              name: 'Klaus',
              certainty: 0.2,
              level: -2
            }
          ]
        },
        source: { index: 1, droppableId: '3' },
        destination: { droppableId: '2', index: 0 }
      }
    ]
  })

  it('should be sane', () => {
    expect(reorderItemMap).toBeDefined()
  })

  it('should reorderItemMap', () => {
    const expectedResult = {
      itemMap: {
        '2': [
          {
            email: 'jeanlucasdecarvalho@gmail.com',
            name: 'Jean',
            certainty: 0.8,
            level: 2
          }
        ],
        '3': [
          {
            email: 'carolmachado@helabs.com',
            name: 'Carol',
            certainty: 0.6,
            level: 3
          }
        ],
        '-2': [
          {
            email: 'klaus@helabs.com',
            name: 'Klaus',
            certainty: 0.2,
            level: -2
          }
        ]
      },
      autoFocusItemId: 'jeanlucasdecarvalho@gmail.com'
    }

    expect(reorderItemMap(...args)).toEqual(expectedResult)
  })
})

//
