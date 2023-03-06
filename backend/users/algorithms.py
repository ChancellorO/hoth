import numpy as np
import random

class algorithms:
    def evaluateDifference(data, user_id, other_id):

        vector_1 = np.array([

            data[user_id]["Gym"],
            data[user_id]["Makeup"],
            data[user_id]["Hikes"],
            data[user_id]["Surfing"],
            data[user_id]["Reading"],
            data[user_id]["Sewing"],
            data[user_id]["Crafts"],
            data[user_id]["Cooking"],
            data[user_id]["Food"],
            data[user_id]["Bars"],
            data[user_id]["Dancing"],
            data[user_id]["Investing"],
            data[user_id]["Fashion"],
            data[user_id]["Religion"],
            data[user_id]["Climate Change"],
            data[user_id]["Comedy"],
            data[user_id]["Social Media"],
            data[user_id]["Self Development"],
            data[user_id]["Photography"],
            data[user_id]["Martial Arts"],
            data[user_id]["Basketball"],
            data[user_id]["Football"],
            data[user_id]["Soccer"],
            data[user_id]["Video Games"],
            data[user_id]["Film"],
            data[user_id]["Concerts"],
            data[user_id]["Playing Music"],

                            ])

        vector_2 = np.array([

            data[other_id]["Gym"],
            data[other_id]["Makeup"],
            data[other_id]["Hikes"],
            data[other_id]["Surfing"],
            data[other_id]["Reading"],
            data[other_id]["Sewing"],
            data[other_id]["Crafts"],
            data[other_id]["Cooking"],
            data[other_id]["Food"],
            data[other_id]["Bars"],
            data[other_id]["Dancing"],
            data[other_id]["Investing"],
            data[other_id]["Fashion"],
            data[other_id]["Religion"],
            data[other_id]["Climate Change"],
            data[other_id]["Comedy"],
            data[other_id]["Social Media"],
            data[other_id]["Self Development"],
            data[other_id]["Photography"],
            data[other_id]["Martial Arts"],
            data[other_id]["Basketball"],
            data[other_id]["Football"],
            data[other_id]["Soccer"],
            data[other_id]["Video Games"],
            data[other_id]["Film"],
            data[other_id]["Concerts"],
            data[other_id]["Playing Music"],

        ])

        comfort = data[user_id]["Comfort"]

        difference_vector = vector_1 - vector_2
        difference = 0

        for i in difference_vector:
            difference += np.abs(i)

        if difference < 1:
            return difference

        difference *= 2

        if comfort > 0:
            difference = np.log(difference)/np.log(1 + comfort*0.1)

        return(difference)

    def match(data, current_user):

        batch = 10
        choice = 0
        difference_list = range(batch)

        for i in range(batch):

            r = random.randint(1, batch)
            other_user = data[r]
            difference_list[i] = 1/algorithms.evaluateDifference(current_user, other_user)


        sample_space = 0

        for i in difference_list:
            sample_space += difference_list[i]

        selection = random.uniform(0, sample_space)

        for i in difference_list:

            selection -= difference_list[i]

            if selection < 0:
                choice = i

        return data[choice]

    def __init__(self):
        return