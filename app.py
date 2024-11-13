'''from flask import Flask, request, jsonify, render_template
from tensorflow import keras
from PIL import Image
import numpy as np
import os

app = Flask(__name__)

model_path = os.path.join('static', 'model', 'model.keras')
model = keras.models.load_model(model_path)


disease_classes = {
    0: 'Actinic keratoses and intraepithelial carcinoma (Bowe"s disease)', 
    1: 'Basal cell carcinoma',
    2: 'Benign keratosis-like lesions',
    3: 'Dermatofibroma',
    4: 'Melanoma',
    5: 'Melanocytic nevi',
    6: 'Vascular lesions (angiomas, angiokeratomas, etc.)'
}


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
   
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    image_file = request.files['image']

    try:
        img = Image.open(image_file)
    except Exception as e:
        return jsonify({"error": "Invalid image format"}), 400

    img = img.resize((224, 224)) 
    img_array = np.array(img) / 255.0  
    img_array = np.expand_dims(img_array, axis=0)  

    prediction = model.predict(img_array)
    predicted_class = np.argmax(prediction, axis=1)[0]
    predicted_probabilities = prediction[0]  

    predicted_disease = disease_classes.get(predicted_class, "Unknown Disease")

    return jsonify({
        "predicted_disease": predicted_disease,
        "predicted_probabilities": predicted_probabilities.tolist() 
    })

if __name__ == '__main__': 
    app.run(debug=True)

'''
'''
from flask import Flask, request, jsonify, render_template, url_for
from tensorflow import keras
from PIL import Image
import numpy as np
import os

app = Flask(__name__)

# Path to your saved model
model_path = os.path.join('static', 'model', 'model.keras')
model = keras.models.load_model(model_path)

# Mapping of disease classes and their corresponding image directories
disease_classes = {
    0: {
        'name': 'Actinic keratoses and intraepithelial carcinoma (Bowe"s disease)',
        'image_folder': 'actinic_keratoses'
    },
    1: {
        'name': 'Basal cell carcinoma',
        'image_folder': 'basal_cell_carcinoma'
    },
    2: {
        'name': 'Benign keratosis-like lesions',
        'image_folder': 'benign_keratosis'
    },
    3: {
        'name': 'Dermatofibroma',
        'image_folder': 'dermatofibroma'
    },
    4: {
        'name': 'Melanoma',
        'image_folder': 'melanoma'
    },
    5: {
        'name': 'Melanocytic nevi',
        'image_folder': 'melanocytic_nevi'
    },
    6: {
        'name': 'Vascular lesions (angiomas, angiokeratomas, etc.)',
        'image_folder': 'vascular_lesions'
    }
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Check if an image file was uploaded
        if 'image' not in request.files:
            return jsonify({"error": "No image uploaded"}), 400

        image_file = request.files['image']

        try:
            # Open and preprocess the image
            img = Image.open(image_file)
        except Exception as e:
            return jsonify({"error": "Invalid image format"}), 400

        # Resize and normalize the image
        img = img.resize((224, 224))
        img_array = np.array(img) / 255.0
        img_array = np.expand_dims(img_array, axis=0)

        # Make a prediction using the model
        prediction = model.predict(img_array)
        predicted_class = np.argmax(prediction, axis=1)[0]
        predicted_probabilities = prediction[0]

        # Get the predicted disease and image folder
        predicted_disease_info = disease_classes.get(predicted_class, {"name": "Unknown Disease", "image_folder": ""})
        predicted_disease = predicted_disease_info['name']
        image_folder = predicted_disease_info['image_folder']

        # Prepare the list of image URLs to send back
        image_urls = []
        if image_folder:
            image_path = os.path.join('static', 'disease_images', image_folder)
            # Check if the directory exists
            if os.path.exists(image_path):
                for image_name in os.listdir(image_path):
                    image_urls.append(url_for('static', filename=f'disease_images/{image_folder}/{image_name}'))
            else:
                print(f"Directory not found: {image_path}")
        else:
            print(f"No image folder found for predicted class {predicted_class}")

        # Return the predicted disease, probabilities, and similar disease images
        return jsonify({
            "predicted_disease": predicted_disease,
            "predicted_probabilities": predicted_probabilities.tolist(),
            "similar_disease_images": image_urls
        })

    except Exception as e:
        # Log the error and return a generic error message
        print(f"Error occurred: {e}")
        return jsonify({"error": "An internal error occurred"}), 500

if __name__ == '__main__':
    app.run(debug=True)
'''
from flask import Flask, request, jsonify, render_template, url_for
from tensorflow import keras
from PIL import Image
import numpy as np
import os

app = Flask(__name__)

model_path = os.path.join('static', 'model', 'model.keras')
model = keras.models.load_model(model_path)

disease_classes = {
    0: {'name': 'Actinic keratoses and intraepithelial carcinoma (Bowen’s disease)', 'image_folder': 'AKIEC'},
    1: {'name': 'Basal cell carcinoma', 'image_folder': 'BCC'},
    2: {'name': 'Benign keratosis-like lesions', 'image_folder': 'BKL'},
    3: {'name': 'Dermatofibroma', 'image_folder': 'DF'},
    4: {'name': 'Melanoma', 'image_folder': 'Melanoma'},
    5: {'name': 'Melanocytic nevi', 'image_folder': 'Nevus'},
    6: {'name': 'Vascular lesions (angiomas, angiokeratomas, etc.)', 'image_folder': 'Vascular'}
}

@app.route('/')
def index():
    return render_template('/Users/mridulbhardwaj/Desktop/Manthan/index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
   
        if 'image' not in request.files:
            return jsonify({"error": "No image uploaded"}), 400

        image_file = request.files['image']

        try:
            img = Image.open(image_file)
        except Exception as e:
            return jsonify({"error": "Invalid image format"}), 400

        img = img.resize((224, 224))  
        img_array = np.array(img) / 255.0 
        img_array = np.expand_dims(img_array, axis=0) 


        prediction = model.predict(img_array)
        predicted_class = np.argmax(prediction, axis=1)[0]
        predicted_probabilities = prediction[0]

        predicted_disease_info = disease_classes.get(predicted_class, {"name": "Unknown Disease", "image_folder": ""})
        predicted_disease = predicted_disease_info['name']
        image_folder = predicted_disease_info['image_folder']

        disease_names = [disease_classes[i]['name'] for i in range(len(disease_classes))]

        image_urls = []
        if image_folder:
            image_path = os.path.join('static', 'diesease_images','/Users/mridulbhardwaj/Desktop/Manthan/static/Dieseasname')
            if os.path.exists(image_path):
                for image_name in os.listdir(image_path):
                    image_urls.append(url_for('static', filename=f'diesease_images/{'disease_images','/Users/mridulbhardwaj/Desktop/Manthan/static/Dieseasname'}/{image_name}'))

        return jsonify({
            "predicted_disease": predicted_disease,
            "predicted_probabilities": predicted_probabilities.tolist(),
            "disease_names": disease_names,
            "similar_disease_images": image_urls
        })

    except Exception as e:
        print(f"Error occurred: {e}")
        return jsonify({"error": "An internal error occurred"}), 500

if __name__ == '__main__':
    app.run(debug=True)