import { Component } from '@angular/core';

interface WorkoutSession {
  workoutType: string;
  workoutMinutes: number;
}

interface UserWorkout {
  userName: string;
  workoutTypes: string[];
  totalWorkouts: number;
  workoutMinutes: number;
  workoutsData: WorkoutSession[];
}

interface userAverage {
  userName: string;
  averageMinutesPerWorkout: number;
}


@Component({
  selector: 'app-array-objects',
  standalone: true,
  imports: [],
  templateUrl: './array-objects.component.html',
  styleUrl: './array-objects.component.scss'
})
export class ArrayObjectsComponent {

  workoutUserData: UserWorkout[] = [
    {
      userName: 'Elon',
      workoutTypes: ['Running', 'Swimming'],
      totalWorkouts: 3,
      workoutMinutes: 153,
      workoutsData: [
        { workoutType: 'Running', workoutMinutes: 30 },
        { workoutType: 'Swimming', workoutMinutes: 123 },
      ],
    },
    {
      userName: 'Chirayu',
      workoutTypes: ['Swimming', 'Yoga'],
      totalWorkouts: 2,
      workoutMinutes: 90,
      workoutsData: [
        { workoutType: 'Swimming', workoutMinutes: 45 },
        { workoutType: 'Yoga', workoutMinutes: 45 },
      ],
    },
    {
      userName: 'Ayush',
      workoutTypes: ['Yoga', 'Running'],
      totalWorkouts: 2,
      workoutMinutes: 120,
      workoutsData: [
        { workoutType: 'Yoga', workoutMinutes: 60 },
        { workoutType: 'Running', workoutMinutes: 60 },
      ],
    },
    {
      userName: 'Priya',
      workoutTypes: ['Swimming', 'Cycling', 'Yoga'],
      totalWorkouts: 5,
      workoutMinutes: 210,
      workoutsData: [
        { workoutType: 'Swimming', workoutMinutes: 60 },
        { workoutType: 'Cycling', workoutMinutes: 90 },
        { workoutType: 'Yoga', workoutMinutes: 60 },
      ],
    },
    {
      userName: 'Alex',
      workoutTypes: ['Weightlifting', 'Running'],
      totalWorkouts: 4,
      workoutMinutes: 180,
      workoutsData: [
        { workoutType: 'Weightlifting', workoutMinutes: 120 },
        { workoutType: 'Running', workoutMinutes: 60 },
      ],
    },
    {
      userName: 'Sofia',
      workoutTypes: ['Yoga', 'Pilates', 'Cycling'],
      totalWorkouts: 6,
      workoutMinutes: 275,
      workoutsData: [
        { workoutType: 'Yoga', workoutMinutes: 90 },
        { workoutType: 'Pilates', workoutMinutes: 85 },
        { workoutType: 'Cycling', workoutMinutes: 100 },
      ],
    }
  ];
  ngOnInit() {
    console.log(this.getUserWithMostWorkouts(this.workoutUserData));
    console.log(this.getUsersWithYoga(this.workoutUserData));
    console.log(this.getAvgWorkoutMins(this.workoutUserData));
    console.log(this.getUserWithMostMinutes(this.workoutUserData));
    console.log(this.getUserAverages(this.workoutUserData));
    console.log(this.getAllUsersWithSwimmingYoga(this.workoutUserData));

  }


  // Write a function to return the name of the user with the most total workouts.

  getUserWithMostWorkouts(users:UserWorkout[]):string | null {
    if (users.length === 0) return null;

    const usersWithMostWorkouts = users.reduce((maxUser, currentUser) => {
      return currentUser.totalWorkouts > maxUser.totalWorkouts ? currentUser : maxUser; //why reduce bcos of the value max
    });

    return usersWithMostWorkouts.userName;
  }

  // Find all users who have done "Yoga" as one of their workout types
  getUsersWithYoga(users: UserWorkout[]):UserWorkout[] {
    const usersWithYoga = users.filter(user => user.workoutTypes.includes('Yoga'));
    return usersWithYoga;
  }

  // Create an array that contains just the userNames of all users.
  getUsernames(users: UserWorkout[]): string[] {
      const userNames = users.map(user => user.userName);
      return userNames;
    }

  // Calculate the average workout minutes across all users.
  getAvgWorkoutMins(users: UserWorkout[]): number {
      const totalMinutes = users.reduce((sum, currentUser) => {
        return sum += currentUser.workoutMinutes;
      }, 0);

      return totalMinutes/users.length;
  }

  // Find the user who spent the most minutes on workouts.

  getUserWithMostMinutes(users: UserWorkout[]): UserWorkout {
    const userWithMostMinutes = users.reduce((maxUser, currentUser) => {
      return maxUser.workoutMinutes > currentUser.workoutMinutes ? maxUser : currentUser  
    });
    return userWithMostMinutes;
  }

  // Create a new array where each element contains the userName and the average minutes per workout for that user.

  //created a newInterface for average

  getUserAverages(users: UserWorkout[]): userAverage[] {
    const userAverages = users.map(user => ({
      userName : user.userName,
      averageMinutesPerWorkout: user.totalWorkouts > 0 ? user.workoutMinutes/user.totalWorkouts : 0
    }));
    return userAverages;
  }

  // Find all users who have done both "Swimming" and "Yoga".

  getAllUsersWithSwimmingYoga(users: UserWorkout[]): UserWorkout[] {
    const requiredWorkouts = ['Yoga', 'Swimming'];
    const filteredUsers = users.filter(user => {
      return requiredWorkouts.every(workout => user.workoutTypes.includes(workout));
    });
    return filteredUsers;
  }

}
