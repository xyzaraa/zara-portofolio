# Food-Nutrition Recognition using Deep Learning (InceptionV3)

As a Machine Learning practitioner, I am always intrigued by how Computer Vision technology can solve real-world problems. This project is my endeavor to build an accurate food recognition system—one that not only identifies the object but also links it to relevant nutritional information.

I chose to employ the **Convolutional Neural Network (CNN)** architecture, specifically the state-of-the-art **InceptionV3** model, known for its efficiency and accuracy in image classification tasks. I executed the entire process using **TensorFlow** and **Keras**.

## 1. Data Analysis and Preprocessing

The initial phase of the project focused on gaining a deep understanding of the dataset, sourced from Kaggle, which includes a diverse range of food images—from fruits like Apples and Grapes, to Indonesian staples like Nasi Uduk and Soto.

After inspecting sample images and visualizing pixel distribution, I identified a key challenge during the Exploratory Data Analysis (EDA): **data imbalance**. Four classes (Watermelon, Mango, Apple, and Grape) had a significantly lower number of samples compared to others.

To mitigate this data sparsity issue and ensure the model could learn robustly, I implemented **Data Augmentation** techniques using the `ImageDataGenerator` on the training set. This included rescaling, shear transformation, zooming, and horizontal flipping, which effectively increased data diversity and reduced the risk of overfitting.

## 2. Model Development with Transfer Learning

Given the complexity of the image recognition task, I adopted a **Transfer Learning** approach. I utilized the pre-trained InceptionV3 model (with `imagenet` weights) as a powerful feature extractor. I "froze" the base layers of InceptionV3 and trained only the new layers I stacked on top:

1.  A `GlobalAveragePooling2D` layer to reduce dimensionality.
2.  A 128-unit `Dense` layer with ReLU activation.
3.  A `Dropout` layer (0.2) to prevent overfitting.
4.  A final 8-class `Dense` layer with Softmax activation and L2 regularization.

The model was compiled using the SGD optimizer with a low learning rate (0.0001) and momentum (0.9). This fine-tuning approach preserved the existing knowledge while optimizing the new layers for the specific food dataset.

## 3. Results and Performance Evaluation

After a comprehensive training process (a total of 24 epochs), I achieved highly satisfactory results:

* The final training accuracy reached **96.10%**.
* The final validation accuracy showed excellent performance, achieving **97.70%**.

Most importantly, on the completely separate test dataset, my InceptionV3 model achieved a **Test Accuracy of 97.4%**.

This high accuracy figure confirms the model's capability to generalize and identify the 8 food categories with high precision.

As a further evaluation step, I conducted an **Error Analysis** by generating a Confusion Matrix. This matrix allowed me to visualize exactly which classes the classifier had trouble with, providing key insights for future model improvements.

Functionally, the model extends beyond simple identification. I developed a prediction function that not only displays the predicted food label but also retrieves and prints nutritional data (Vitamin, Carbohydrates, Fat, and Protein) from a supporting CSV file.

This project serves as a concrete demonstration of my expertise in:
* Implementing Transfer Learning using advanced Deep Learning architectures.
* Addressing data imbalance issues through Data Augmentation.
* Optimizing and evaluating models to achieve high accuracy and stable performance.
* Integrating classification results with external data (nutrition) to deliver a more valuable solution.