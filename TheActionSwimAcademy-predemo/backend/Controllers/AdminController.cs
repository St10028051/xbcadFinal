using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.IO;
using System.Threading.Tasks;

namespace TheActionSwimAcademy.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class AdminController : ControllerBase
	{
		private readonly string _imageUploadPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");

		public AdminController()
		{
			// Ensure the directory exists
			if (!Directory.Exists(_imageUploadPath))
			{
				Directory.CreateDirectory(_imageUploadPath);
			}
		}

		[HttpPost("upload-image")]
		public async Task<IActionResult> UploadImage([FromForm] IFormFile imageFile)
		{
			if (imageFile == null || imageFile.Length == 0)
			{
				return BadRequest("No file uploaded or file is empty.");
			}

			var fileName = Path.GetFileName(imageFile.FileName);
			var filePath = Path.Combine(_imageUploadPath, fileName);

			try
			{
				using (var stream = new FileStream(filePath, FileMode.Create))
				{
					await imageFile.CopyToAsync(stream);
				}
				return Ok(new { Message = "Image uploaded successfully!", FileName = fileName });
			}
			catch
			{
				return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while uploading the image.");
			}
		}
	}
}
