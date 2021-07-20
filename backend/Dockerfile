FROM python:3

WORKDIR /app
COPY ./requirements.txt /app/backend/


RUN pip install --upgrade --no-cache-dir pip==21.0.1
RUN pip install -r backend/requirements.txt --no-cache-dir

COPY . /app/backend
# Create start.sh as entrypoint
# migrate?
# Collect Static?

WORKDIR /app/backend
