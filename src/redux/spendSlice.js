import { createSlice } from "@reduxjs/toolkit";

export const spendSlice = createSlice({
    name: "spend",
    initialState: {
        money: 100000000000,
        things: [
            {
                name: "Big Mac",
                price: 2,
                image: "https://neal.fun/spend/images/big-mac.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Flip Flops",
                price: 3,
                image: "https://neal.fun/spend/images/flip-flops.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Coca-Cola Pack",
                price: 5,
                image: "https://neal.fun/spend/images/coca-cola-pack.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Movie Ticket",
                price: 12,
                image: "https://neal.fun/spend/images/movie-ticket.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Book",
                price: 15,
                image: "https://neal.fun/spend/images/book.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Lobster Dinner",
                price: 45,
                image: "https://neal.fun/spend/images/lobster-dinner.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Video Game",
                price: 60,
                image: "https://neal.fun/spend/images/video-game.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Amazon Echo",
                price: 99,
                image: "https://neal.fun/spend/images/amazon-echo.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Year of Netflix",
                price: 100,
                image: "https://neal.fun/spend/images/year-of-netflix.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Air Jordans",
                price: 125,
                image: "https://neal.fun/spend/images/air-jordans.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Airpods",
                price: 199,
                image: "https://neal.fun/spend/images/airpods.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Gaming Console",
                price: 299,
                image: "https://neal.fun/spend/images/gaming-console.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Drone",
                price: 350,
                image: "https://neal.fun/spend/images/drone.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Smartphone",
                price: 699,
                image: "https://neal.fun/spend/images/smartphone.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Bike",
                price: 800,
                image: "https://neal.fun/spend/images/bike.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Kitten",
                price: 1500,
                image: "https://neal.fun/spend/images/kitten.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Puppy",
                price: 1500,
                image: "https://neal.fun/spend/images/puppy.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Auto Rickshaw",
                price: 2300,
                image: "https://neal.fun/spend/images/auto-rickshaw.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Horse",
                price: 2500,
                image: "https://neal.fun/spend/images/horse.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Acre of Farmland",
                price: 3000,
                image: "https://neal.fun/spend/images/acre-of-farmland.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Designer Handbag",
                price: 5500,
                image: "https://neal.fun/spend/images/designer-handbag.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Hot Tub",
                price: 6000,
                image: "https://neal.fun/spend/images/hot-tub.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Luxury Wine",
                price: 7000,
                image: "https://neal.fun/spend/images/luxury-wine.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Diamond Ring",
                price: 10000,
                image: "https://neal.fun/spend/images/diamond-ring.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Jet Ski",
                price: 12000,
                image: "https://neal.fun/spend/images/jet-ski.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Rolex",
                price: 15000,
                image: "https://neal.fun/spend/images/rolex.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Ford F-150",
                price: 30000,
                image: "https://neal.fun/spend/images/ford-f-150.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Tesla",
                price: 75000,
                image: "https://neal.fun/spend/images/tesla.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Monster Truck",
                price: 150000,
                image: "https://neal.fun/spend/images/monster-truck.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Ferrari",
                price: 250000,
                image: "https://neal.fun/spend/images/ferrari.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Single Family Home",
                price: 300000,
                image: "https://neal.fun/spend/images/single-family-home.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Gold Bar",
                price: 700000,
                image: "https://neal.fun/spend/images/gold-bar.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "McDonalds Franchise",
                price: 1500000,
                image: "https://neal.fun/spend/images/mcdonalds-franchise.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Superbowl Ad",
                price: 5250000,
                image: "https://neal.fun/spend/images/superbowl-ad.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Yacht",
                price: 7500000,
                image: "https://neal.fun/spend/images/yacht.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "M1 Abrams",
                price: 8000000,
                image: "https://neal.fun/spend/images/m1-abrams.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Formula 1 Car",
                price: 15000000,
                image: "https://neal.fun/spend/images/formula-1-car.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Apache Helicopter",
                price: 31000000,
                image: "https://neal.fun/spend/images/apache-helicopter.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Mansion",
                price: 45000000,
                image: "https://neal.fun/spend/images/mansion.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Make a Movie",
                price: 100000000,
                image: "https://neal.fun/spend/images/make-a-movie.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Boeing 747",
                price: 148000000,
                image: "https://neal.fun/spend/images/boeing-747.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Mona Lisa",
                price: 780000000,
                image: "https://neal.fun/spend/images/mona-lisa.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Skyscraper",
                price: 850000000,
                image: "https://neal.fun/spend/images/skyscraper.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "Cruise Ship",
                price: 930000000,
                image: "https://neal.fun/spend/images/cruise-ship.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

            {
                name: "NBA Team",
                price: 2120000000,
                image: "https://neal.fun/spend/images/nba-team.jpg",
                piece: 0,
                isBuyActive: true,
                isSellActive: false
            },

        ],
        bought: [],
        totalSpent: 0,
    },
    reducers: {
        spendMoney: (state, action) => {
            let x = state.things.find(element => element.name === action.payload.name);
            if (x.price < state.money) {
                state.money -= Number(action.payload.price);
                x.piece++;
                x.isBuyActive = true;
                x.isSellActive = true;
                state.totalSpent += action.payload.price;
            }

            else {
                x.isBuyActive = false;
                x.isSellActive = true;
            }

            let y = state.bought.find(element => element.name === action.payload.name);

            if (y) y.piece++;
            else state.bought.push({
                name: action.payload.name,
                price: action.payload.price,
                piece: 1
            })
        },

        getMoney: (state, action) => {
            let x = state.things.find(element => element.name === action.payload.name);
            if (x.piece > 0) {
                state.money += action.payload.price;
                x.piece--;
                x.isSellActive = true;
                state.totalSpent -= action.payload.price;
            }

            else {
                x.isSellActive = false;
            }

            if (state.money > x.price) {
                x.isBuyActive = true;
            }

            let y = state.bought.find(element => element.name === action.payload.name);
            let index = state.bought.findIndex(element => element.name === action.payload.name);

            if (y.piece > 0) y.piece--;
            else {
                state.bought.splice(index, 1);
            }
        }
    },
})

export const { spendMoney, getMoney } = spendSlice.actions;

export default spendSlice.reducer;