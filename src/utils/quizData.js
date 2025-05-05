
export const characterTypes = {
  igglepiggle: {
    id: 'igglepiggle',
    name: 'Igglepiggle Type/Adventurer',
    description: 'You\'re full of curiosity and adventurous spirit, lively and enthusiastic about new things. Although you sometimes feel uneasy, you always find the courage to move forward. You love exploring the world and discovering new things – you\'re a born explorer. Just like Igglepiggle always dragging his red blanket on adventures, you also like to seek excitement with a sense of security.'
  },
  makkapakka: {
    id: 'makkapakka',
    name: 'Makka Pakka Type/Guardian',
    description: 'You\'re serious, responsible, detail-oriented, and like everything to be in order. You\'re the organizer among friends, always ensuring things go according to plan. You\'re reliable and solid, trusted by everyone, just like Makka Pakka is the guardian of the garden. Your presence makes the surrounding environment more orderly and safe, an indispensable stabilizing force in the team.'
  },
  upsydaisy: {
    id: 'upsydaisy',
    name: 'Upsy Daisy Type/Performer',
    description: 'You\'re cheerful, confident, full of artistic sense and expressiveness. You like to express yourself through song and dance, with rich and outward emotions. You\'re optimistic and upbeat, always maintaining a positive attitude in various situations, and you\'re also good at socializing. Just like Upsy Daisy and her colorful pigtails, your emotions are colorful – when you\'re happy, the whole world can feel your joy.'
  },
  tombliboo: {
    id: 'tombliboo',
    name: 'Tombliboo Type/Team Player',
    description: 'You\'re friendly and peaceful, valuing teamwork and friendship. You like to share experiences with friends and face challenges together. You\'re kind and considerate, always thinking of others\' feelings, an excellent listener and supporter. Just like the three Tombliboo brothers always acting together, you find a sense of belonging and security in groups, performing your best potential when with others.'
  },
  haahoo: {
    id: 'haahoo',
    name: 'Haahoo Type/Harmonizer',
    description: 'You have a gentle personality, a leisurely pace, and don\'t like to rush. Although you may be large in size, your heart is soft. You like quiet environments and are good at harmonizing the surrounding atmosphere. Your presence gives people a sense of peace and comfort. Just like the five huge pillow-shaped Haahoos in the garden, your very existence is a symbol of comfort and tranquility, making those around you feel relaxed.'
  },
  ninkynonk: {
    id: 'ninkynonk',
    name: 'Ninky Nonk Type/Innovator',
    description: 'Your thinking is flexible, your action routes often unconventional, but you always reach your destination. You\'re good at jumping thinking, often having unexpected creativity. You have both an adventurous spirit and your own unique methods, making you eye-catching. Just like the Ninky Nonk that can wobble through hedges, climb up and down tree trunks, you have a unique way of solving problems that, though seemingly unusual, often achieves unexpected good results.'
  },
  balanced: {
    id: 'balanced',
    name: 'Harmonizer of the Garden World',
    description: 'You\'re a well-rounded person with an adventurer\'s curiosity, a guardian\'s sense of responsibility, a performer\'s expressiveness, and a team player\'s spirit of cooperation. Like the garden world itself, you\'re a harmonious whole composed of various elements. You can display different traits in different situations – you\'re a person with extreme adaptability and a sense of balance. You can explore independently and cooperate with others; you value order without losing creativity. This balanced trait makes you a true harmonizer of the garden world.'
  }
}

// Questions data
export const questions = [
  {
    id: 1,
    text: 'When you have free time, what do you enjoy doing most?',
    options: [
      { id: 'A', text: 'Exploring new places, discovering corners you\'ve never been to' },
      { id: 'B', text: 'Organizing your space, making everything neat and tidy' },
      { id: 'C', text: 'Singing, dancing, or engaging in creative activities' },
      { id: 'D', text: 'Chatting and playing with friends' }
    ]
  },
  {
    id: 2,
    text: 'When facing difficulties, how do you usually handle them?',
    options: [
      { id: 'A', text: 'Though a bit scared, you still bravely face them' },
      { id: 'B', text: 'Analyzing the problem, making detailed solutions' },
      { id: 'C', text: 'Staying optimistic, believing problems will be solved' },
      { id: 'D', text: 'Finding friends to think of solutions together' }
    ]
  },
  {
    id: 3,
    text: 'Others\' first impression of you is usually:',
    options: [
      { id: 'A', text: 'Full of energy, always on the move' },
      { id: 'B', text: 'Reliable and serious, organized in everything you do' },
      { id: 'C', text: 'Expressive, rich in emotions' },
      { id: 'D', text: 'Friendly and easy-going, good at cooperation' }
    ],
    weight: 1.2
  },
  {
    id: 4,
    text: 'In group activities, you often:',
    options: [
      { id: 'A', text: 'Propose new ideas, lead others to try them' },
      { id: 'B', text: 'Take charge of planning and arrangements, ensuring everything goes smoothly' },
      { id: 'C', text: 'Liven up the atmosphere, making everyone happy' },
      { id: 'D', text: 'Coordinate different opinions, helping reach consensus' }
    ]
  },
  {
    id: 5,
    text: 'Your room or workspace is usually:',
    options: [
      { id: 'A', text: 'Filled with interesting items, a bit messy but full of personality' },
      { id: 'B', text: 'Neat and organized, everything has its fixed place' },
      { id: 'C', text: 'Colorful, richly decorated, full of artistic sense' },
      { id: 'D', text: 'Comfortable and cozy, suitable for gathering with friends' }
    ]
  },
  {
    id: 6,
    text: 'When you see beautiful scenery, you:',
    options: [
      { id: 'A', text: 'Want to immediately explore and see what interesting things there are' },
      { id: 'B', text: 'Appreciate its harmony and order' },
      { id: 'C', text: 'Feel inspired, want to express your feelings' },
      { id: 'D', text: 'Hope to share this beautiful moment with friends' }
    ]
  },
  {
    id: 7,
    text: 'The quality you most appreciate about yourself is:',
    options: [
      { id: 'A', text: 'Curiosity and spirit of adventure' },
      { id: 'B', text: 'Being meticulous and responsible' },
      { id: 'C', text: 'Creativity and expressiveness' },
      { id: 'D', text: 'Ability to get along harmoniously with others' }
    ],
    weight: 1.5
  },
  {
    id: 8,
    text: 'When you need to recharge your energy, you prefer:',
    options: [
      { id: 'A', text: 'Going on a short adventure or exploring something new' },
      { id: 'B', text: 'Creating a peaceful space and following a relaxing routine' },
      { id: 'C', text: 'Immersing yourself in music, art, or watching performances' },
      { id: 'D', text: 'Connecting with close friends, even if just through messages' }
    ]
  },
  {
    id: 9,
    text: 'When facing changes, you usually:',
    options: [
      { id: 'A', text: 'Excitedly accept them, looking forward to new possibilities' },
      { id: 'B', text: 'Hope to have time to adapt and prepare' },
      { id: 'C', text: 'Cope with creativity, finding fun in it' },
      { id: 'D', text: 'Face them with friends, supporting each other' }
    ],
    weight: 1.5
  },
  {
    id: 10,
    text: 'If you could choose a mode of transportation, you would choose:',
    options: [
      { id: 'A', text: 'A flying vehicle that can reach anywhere' },
      { id: 'B', text: 'A safe and reliable conventional vehicle' },
      { id: 'C', text: 'A colorful, eye-catching vehicle' },
      { id: 'D', text: 'A large vehicle that you can ride with friends' }
    ],
    isTiebreaker: true
  }
]