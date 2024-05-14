import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

export const metadata ={
    title: 'All Meals',
    description: 'Browse the delicious meals shared by our vibrant community.'
}

async function Meals(){
    const meals = await getMeals();
    return <MealsGrid meals={meals} />
}

export default function MealsPage(){

    
    return(
        <>
        <header className={classes.header}>
           <h1>Delicious Meals, created{' '}
           <span className={classes.highlight}>by you</span>
           </h1>
           <p>
            Choose your favorite recipe and cook it yourself. It is easy and fun!
           </p>
           <p className={classes.cta}>
            <Link href="/meals/share">
            Share Your Favorite Receipe
            </Link>
           </p>
        </header>
        <main className={classes.main}>
           <Suspense>
           <Meals />
           </Suspense>
        </main>
        </>
    );
}