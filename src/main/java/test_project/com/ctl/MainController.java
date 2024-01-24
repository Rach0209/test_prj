package test_project.com.ctl;

import java.util.Locale;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	private static final Logger logger = LogManager.getLogger(MainController.class);
	
	@RequestMapping(value = "/map3d")
	public String home(Locale locale, Model model) {
		logger.info("Welcome 3DMap!! {}", locale);
		return "/main/map";
	}
}
