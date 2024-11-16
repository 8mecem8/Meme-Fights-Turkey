- [x] Crate The Project
- [x] Decide Tech stack
- [x] Plan and document Game Theme
- [x] Plan and document Game rules 
- [x] Plan and document Game dynamics 
- [ ] Start Project
- [ ] Create Game Loop following Game dynamics 
- [ ] Apply Game rules in the Loop
- [ ] Finish playable first V1 of the game


## Project Name : Meme Fight Turkey 
<!--
 Aletnative names :  
     - Turkey Simulation Card Game
     - Simulation Turkey with Cards
-->


# Change Project name to Numbers and Natural Elements <!-- Reason for this first need to create a reference Project/working prototype then we can implement the main idea -->
<!--
 Aletnative names :  
     - Fight of the Elements
     - Numbers fight with elements
-->



### Tech Stack -----------------
*Vite[TS] - React.js + Redux | Html+CSS* <!-- If we need then can add css library  -->




### Game Theme -----------------
*Card Game fighting with Natural Elements and Numbers*

### Game rules -----------------
*2 player game*
*A deck of Cards for each player*
*Cards has 2 unique Types: 1-Type of the Element 2-Value of the Number *
*Combination of the Type and value of the card generates a number that can be compareable with opponent's card(s)*
*Card with higher Number takes advantage as a result lower opponent's life/power*

*Each element (e.g., Fire, Water, Earth, Air) could have unique effects.* For example:
    1. Fire: Burns an opponent's card, reducing its value by 10%.
    2. Water: Neutralizes a Fire card, reducing its value to 0.
    3. Earth: Gains +5 power against Air cards.
    4. Air: Can dodge and avoid a single attack per turn.

*Card Combo Bonuses* For example:
    1. If a player plays two or more cards with the same type or consecutive numbers, they receive a bonus multiplier (e.g., +20% attack power).

*Deck Size and Shuffle:*
    1. Players must draw cards from a shared or individual deck, with each deck limited to 30 cards.
    2. Players can reshuffle their deck once per game to reset their hand.

*Life Points:*
    1. Each player starts with 100 life points. A card with a higher value subtracts its difference from the opponent’s life points.

*Card Limit Per Turn:*
    1. Players can only play up to 2 cards per turn, forcing strategic decisions about when to attack or defend.


### Game dynamics -----------------
*Turn-Based System:*
    - Each player has two phases:
    2. Action Phase: Play a card or multiple cards to attack or defend.
    3. Draw Phase: Draw cards to refill their hand (up to 5 cards).

*Energy or Resource System:*
    1. Introduce an energy system where each card costs energy to play. Players gain 5 energy per turn but must manage resources carefully to play high-value cards.

*Weather Events (Dynamic Effects):*
    - Random weather effects at the start of a turn can influence the game:
    1. Storm: Boosts Air cards.
    2. Drought: Weakens Water cards.
    3. Volcanic Eruption: Boosts Fire cards.

*Multi-Card Combos:*
    - Allow players to combine multiple cards to create unique attacks. For instance:
    1. Fire + Earth = Lava (extra damage).
    2. Water + Air = Tornado (discards opponent’s top card).

*Defense Mechanic:*
    1. Add a shield or block feature. Players can use certain cards to defend against specific attacks, reducing damage taken.

*Game-End Conditions:*
    - The game ends when:
    1. One player's life points drop to 0.
    2. A player cannot draw cards from their deck (deck exhaustion).