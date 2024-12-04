using MongoDB.Driver;

namespace TheActionSwimAcademy.backend.Services
{
    public class MongoDbService
    {
        private readonly IMongoDatabase _database;

        public MongoDbService(IMongoClient mongoClient)
        {
            _database = mongoClient.GetDatabase("TheActionSwimAcademy"); // Replace with your database name
        }

        public IMongoCollection<T> GetCollection<T>(string collectionName)
        {
            return _database.GetCollection<T>(collectionName);
        }
    }
}
