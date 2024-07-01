<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee ID Collection</title>
    <style>
        body {
            background: linear-gradient(45deg, #ffcc00, #ff6699, #66ccff, #ff99cc, #ccff66);
            background-size: 400% 400%;
            animation:  10s ease infinite;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        
        @keyframes gradientBackground {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        #form-container {
            background: rgba(255, 255, 255, 0.8);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        input[type="text"] {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        button {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            background-color: #333;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #555;
        }
    </style>
</head>
<body>
    <div id="form-container">
        <h1>Employee Information</h1>
        <input type="text" id="employeeId" placeholder="Enter Employee ID">
        <input type="text" id="uniqueId" placeholder="Enter Unique ID">
        <button onclick="submitData()">Submit</button>
        <p id="response" style="margin-top: 20px;"></p>
    </div>

    <script>
        function submitData() {
            const employeeId = document.getElementById('employeeId').value;
            const uniqueId = document.getElementById('uniqueId').value;
            const responseElement = document.getElementById('response');

            if (employeeId && uniqueId) {
                responseElement.textContent = `Employee ID: ${employeeId}, Unique ID: ${uniqueId}`;
            } else {
                responseElement.textContent = 'Please enter both Employee ID and Unique ID.';
            }
        }

    </script>
</body>
</html>
